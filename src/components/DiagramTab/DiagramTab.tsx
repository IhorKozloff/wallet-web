import { DiagramTabWrapper, DoughnutPlug, StatisticContentWrapper } from './DiagramTab.styled';
import { Table, CustomSelect, DoughnutChart, FullScreenLoader } from 'components';
import { useAppSelector, useAppDispatch } from 'hooks/useSelectorAndDispatch';
import { colorizedCategory } from 'helpers';
import { useState, useEffect } from 'react';
import { fetchCategories } from 'redux/operations/transactionsOperations';
import React from 'react';
import { IExpenseData, IIncomeData } from 'redux/slices/transactionsSlice';
import { IDataToProps, ITableCategory } from 'types/transactionAsProps';
import format from 'format-number';
import { constantValues } from 'config/constantValues';
import { yearDataSetCreator } from 'helpers/yearsDatasetCreator';
import { MonthType } from 'types/transaction';

export const DiagramTab = () => {

    const initialDataToProps = {
        tableCategories: [],
        tableExpenseSum: '0.00',
        tableIncomeSum: '0.00'
    };

    const dispatch = useAppDispatch();

    const [monthValue, setMonthValue] = useState<MonthType>('all');
    const [yearValue, setYearValue] = useState<string>('all');
    const [dataToProps, setDataToProps] = useState<IDataToProps>(initialDataToProps);

    const { expenseData, incomeData } = useAppSelector(state => state.allTransactionsStoreData.categories);
    const { isLoading } = useAppSelector(state => state.allTransactionsStoreData);
    const {token} = useAppSelector(state => state.userStatus.user);

    useEffect(() => {
        if (monthValue === 'all' && yearValue === 'all') {
            return;
        }

        const queryParams = {
            month: monthValue,
            year: yearValue,
            token: token!
        };
        dispatch(fetchCategories(queryParams));
        
    },[dispatch, monthValue, token, yearValue]);
    
    const propCategoriesCreator = (categories: IExpenseData[]): ITableCategory[] => {
   
        return categories.map(({categoryType, total}) => {
            return {
                categoryColor: colorizedCategory(categoryType),
                categoryName: categoryType,
                categorySum: total
            };
        });
    };

    const propExpenseSumCreator = (categories: IExpenseData[]): string => {
        const totalSum = categories.reduce((total, item) => total += item.total,0);
        return format({integerSeparator: ' '})(totalSum);
    };

    const propIncomeSumCreator = (totalSumObject: IIncomeData) => { 
        return format({integerSeparator: ' '})(totalSumObject.total);
    };
    
    useEffect(() => {

        if(expenseData.length === 0) {
            setDataToProps({
                tableCategories: [],
                tableExpenseSum: '0.00',
                tableIncomeSum: '0.00'
            });
            return;
        }

        setDataToProps({
            tableCategories: propCategoriesCreator(expenseData),
            tableExpenseSum: propExpenseSumCreator(expenseData),
            tableIncomeSum: propIncomeSumCreator(incomeData)
        });
        
    },[expenseData, incomeData]);
        
    const onMonthSelectChange = (data: MonthType) => {
        setMonthValue(data);
    };
    const onYearSelectChange = (data: string) => {
        setYearValue(data);
    };

    return (
        <DiagramTabWrapper>
            {dataToProps.tableExpenseSum !== initialDataToProps.tableExpenseSum && <DoughnutChart data={dataToProps}/>}
            {dataToProps.tableExpenseSum === initialDataToProps.tableExpenseSum && <DoughnutPlug/>}
            {isLoading === true && <FullScreenLoader/>}

            <StatisticContentWrapper>
                <CustomSelect items={yearDataSetCreator()} changeValue={onYearSelectChange}/>
                <CustomSelect items={constantValues.DATE.monthDataSet} changeValue={onMonthSelectChange}/>
                <Table dataToProps={dataToProps}/>
            </StatisticContentWrapper>
        </DiagramTabWrapper>
    ); 
};