import { 
    TransactionAddFormWrapper, FormTittle, CustomRadioButton, TransactionAddFormContainer, 
    ModalTextInput, FormButtonsList, FormChangerWrapper, CustomRadioButtonWrapper, 
    RangeSwitcherBtn, DateAndMoneySet 
} from './TransactionAddForm.styled';

import { ModalDatePicker } from './ModalDatePicker/ModalDatePicker';
import { createPortal } from 'react-dom';
import { useState, useRef} from 'react';
import {constantValues} from 'config/constantValues';
import { ModalTransactionSelectButton } from 'components';
import { ConfirmButton, CancelButton } from './TransactionAddForm.styled';
import { Formik, Form, FormikValues } from 'formik';
import React from 'react';
import { TransactionCategory, TransactionFormData } from 'types/transaction';

interface IProps {
    setTransactionAddData: (data: TransactionFormData) => void;
    showBarCtrl: () => void;
}
export const TransactionAddForm = ({setTransactionAddData, showBarCtrl}: IProps) => {
    const [ dataFormDate, setaDataFormDate] = useState('');
    const [category, setCategory] = useState<TransactionCategory | null>(null);
    const [ formsStatus, setFormsStatus] = useState<'income' | 'expense'>('income');
    const inputRangeRef = useRef<HTMLInputElement>(null);

    const onChangeRadioBtn = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        console.log(event.target.value);

        if(target.value === 'income' || target.value === 'expense') {
            setFormsStatus(target.value);
        }

        if (inputRangeRef.current && target.value === 'income') {
            inputRangeRef.current.value = '0';
            return;
        }
        if (inputRangeRef.current && target.value === 'expense') {    
            inputRangeRef.current.value = '1';
            return;
        }
    };

    const onRangeBtnChange = (value: string) => {
        if (value === '1') {
            setFormsStatus('expense');
            return;
        }
        if (value === '0') {
            setFormsStatus('income');
            return;
        }
    };

    const onSelectChange = (selectValue: TransactionCategory) => {
        setCategory(selectValue);
    };
    const onSubmit = ({sum = '', comment = ''}, actions: FormikValues) => {

        const dateToObjectConverter = (date: string) => {
            const dateArr = date.split('.');

            const newDateObj = {
                day: Number(dateArr[0]),
                month: Number(dateArr[1]),
                year: Number(dateArr[2])
            };

            return newDateObj;
        };

        if (category) {

            const newTransactionDataSet: TransactionFormData = {
                type: formsStatus, 
                category, 
                sum, 
                date: dateToObjectConverter(dataFormDate)
            };
    
            if (comment === '') {
                newTransactionDataSet.comment = '-';
            } else {
                newTransactionDataSet.comment = comment;
            }
    
            setTransactionAddData(newTransactionDataSet);
            actions.resetForm();
            showBarCtrl();

        };
    };

    return createPortal(
        <TransactionAddFormWrapper>
            <TransactionAddFormContainer>
                <FormTittle className="forms__tittle">Add transaction</FormTittle>
                <FormChangerWrapper>
                    <CustomRadioButtonWrapper  formsStatus={formsStatus} className="income-checkbox">
                        <label>
                            <CustomRadioButton onChange={onChangeRadioBtn} type="radio" name="formType" value="income"/>
                                    Income
                        </label>
                    </CustomRadioButtonWrapper>
                                
                    <RangeSwitcherBtn 
                        formsStatus={formsStatus}
                        ref={inputRangeRef}
                        className="range-switcher-btn" 
                        name="range-switcher" 
                        defaultValue="0"
                        min="0" 
                        max="1" 
                        step="1"
                        onChange={(event) => {
                            onRangeBtnChange(event.target.value);
                        }}
                    >
                    </RangeSwitcherBtn>

                    <CustomRadioButtonWrapper formsStatus={formsStatus} className="expense-checkbox">
                        <label>
                            <CustomRadioButton  onChange={(event) => {
                                onChangeRadioBtn(event);
                            }} type="radio" name="formType" value="expense"/>
                                    Expense
                        </label>
                    </CustomRadioButtonWrapper>
                </FormChangerWrapper>

                <Formik 
                    initialValues={{sum: '', comment: ''}}
                    onSubmit={onSubmit}
                >
                    <Form>            
                        <div style={{marginBottom: '40px'}}>
                            {formsStatus === 'expense'  && <ModalTransactionSelectButton items={constantValues.CATEGORIES.expenseDataSet} changeValue={onSelectChange}/>}
                            {formsStatus === 'income'  && <ModalTransactionSelectButton items={constantValues.CATEGORIES.incomeDataSet} changeValue={onSelectChange}/>}
                        </div>
                       
                        <DateAndMoneySet>
                            
                            <li>
                                <ModalTextInput  placeholder="00.00" name="sum" className="sum-field"></ModalTextInput>
                            </li>
                            <li style={{width: '350px'}}>
                                <ModalDatePicker setaDataFormDate={setaDataFormDate}/>
                            </li>
                            
                        </DateAndMoneySet>

                        <div style={{marginBottom: '40px'}}>
                            <ModalTextInput placeholder="Comment" name="comment" className="comment-field"/>
                        </div>

                        <FormButtonsList className="form-btns-wrapper">
                            <li>
                                <ConfirmButton type="submit">Add</ConfirmButton>
                            </li>
                            <li>
                                <CancelButton type="button" onClick={showBarCtrl}>Cancel</CancelButton>
                            </li>
                        </FormButtonsList>
                    </Form>
                </Formik>
            </TransactionAddFormContainer>
        </TransactionAddFormWrapper>, document.querySelector('#modal-root') as HTMLDivElement
        
    );
};