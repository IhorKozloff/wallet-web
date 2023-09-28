import {
    TableWrapper,
    TableTittle,
    TableTittleBtn,
    TableContentList,
    TableContentItem,
    ItemCategoryWrapper,
    CategoryColorMark,
    TableResultList,
    TableResultItem,
    ResultItemTittle,
    ResultItemValue,
} from './StatisticTable.styled';
import { useState, useEffect } from 'react';
import { sumConverter } from 'helpers';
import React from 'react';
import { IDataToProps, ITableCategory } from 'types/transactionAsProps';

interface IProps {
    dataToProps: IDataToProps;
}

export const Table = ({ dataToProps: {tableCategories, tableExpenseSum, tableIncomeSum} }: IProps) => {

    const [dataToRender, setDataToRender] = useState<ITableCategory[] | null>(null);
  
    const [categorySortedStatus, setCategorySortedStatus] = useState('');
    const [sumSortedStatus, setSumSortedStatus] = useState('');
  
    useEffect(() => {
        if (tableCategories.length === 0) {
            if(!dataToRender) {
                return;
            } else {
                setDataToRender(null);
                return;
            }
        }
        setDataToRender(tableCategories);
    }, [dataToRender, tableCategories]);
  
    function sortByCategory() {
        if (categorySortedStatus === '' || categorySortedStatus === 'ZA') {
            const sortedData = [...tableCategories].sort(
                (firstCategory, secondCategory) =>
                    firstCategory.categoryName.localeCompare(secondCategory.categoryName)
            );
            setCategorySortedStatus('AZ');
            setSumSortedStatus('');
  
            setDataToRender(sortedData);
        }
        if (categorySortedStatus === 'AZ') {
            const sortedData = [...tableCategories].sort(
                (firstCategory, secondCategory) =>
                    secondCategory.categoryName.localeCompare(firstCategory.categoryName)
            );
            setCategorySortedStatus('ZA');
            //setSumSortedStatus('');
  
            setDataToRender(sortedData);
        }
    }
  
    function sortHelper(method: 'ascending' | 'descending') {
        if (!dataToRender) {
            return null;
        }

        switch (method) {
        case 'ascending':
            return [...dataToRender].sort((a, b) => a.categorySum - b.categorySum);
  
        case 'descending':
            return [...dataToRender].sort((a, b) => b.categorySum - a.categorySum);
  
        default:
            console.log('incorrect method');
            return null;
        }
    }
  
    function sortBySum() {
        let sortedResult;
  
        switch (sumSortedStatus) {
        case '':
            sortedResult = sortHelper('ascending');
            setSumSortedStatus('increment');
            setCategorySortedStatus('');
            break;
  
        case 'decrement':
            sortedResult = sortHelper('ascending');
            setSumSortedStatus('increment');
            setCategorySortedStatus('');
            break;
  
        case 'increment':
            sortedResult = sortHelper('descending');
            setSumSortedStatus('decrement');
            break;
  
        default:
            sortedResult = null;
            console.log('error: function sortBySum get incompatible case');
        }
  
        setDataToRender(sortedResult);
    }
  
    return (
        <>
            <TableWrapper className="table-wrapper">
                <TableTittle className="table-tittle">
                    <TableTittleBtn className="table-tittle-btn" onClick={sortByCategory}>
              Category
                    </TableTittleBtn>
                    <TableTittleBtn className="table-tittle-btn" onClick={sortBySum}>
              Sum
                    </TableTittleBtn>
                </TableTittle>
  
                <TableContentList className="table-content-list">
                    {dataToRender && dataToRender.length !== 0 && 
              dataToRender.map(({ categoryColor, categoryName, categorySum }) => {
                  return (
                      <TableContentItem
                          className="table-content-item"
                          key={categoryName}
                      >
                          <ItemCategoryWrapper className="item-category-wrapper">
                              <CategoryColorMark
                                  background={categoryColor}
                              ></CategoryColorMark>
                              <span className="category-name">
                                  {categoryName}
                              </span>
                          </ItemCategoryWrapper>
                          <span>{sumConverter(categorySum)}</span>
                      </TableContentItem>
                  );
              })}
                </TableContentList>
  
                <TableResultList className="table-result-list">
                    <TableResultItem className="table-result-item">
                        <ResultItemTittle className="result-item-tittle">
                Expenses:
                        </ResultItemTittle>
                        <ResultItemValue
                            className="result-item-value"
                            color={'var(--pink)'}
                        >
                            {tableExpenseSum}
                        </ResultItemValue>
                    </TableResultItem>
  
                    <TableResultItem className="table-result-item">
                        <ResultItemTittle className="result-item-tittle">
                Income:
                        </ResultItemTittle>
                        <ResultItemValue
                            className="result-item-value"
                            color={'var(--green)'}
                        >
                            {tableIncomeSum}
                        </ResultItemValue>
                    </TableResultItem>
                </TableResultList>
            </TableWrapper>
        </>
    );
};