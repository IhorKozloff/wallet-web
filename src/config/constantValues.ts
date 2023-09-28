export const constantValues = {
    GENERAL: {
        baseAPIUrl: 'https://wallet-8d2r.onrender.com/api'
    },
    CATEGORIES: {
        colors: [
            {
                categoryColor: '#B5B88F',
                categoryName: 'main',
            },
            {
                categoryColor: '#FF7A7A',
                categoryName: 'house',
            },
            {
                categoryColor: '#FFF1CB',
                categoryName: 'children',
            },
            {
                categoryColor: '#F0F1AB',
                categoryName: 'development',
            },
            {
                categoryColor: '#75D7B4',
                categoryName: 'food',
            },
            {
                categoryColor: '#FED057',
                categoryName: 'basic',
            },
            {
                categoryColor: '#FFD8D0',
                categoryName: 'products',
            },
            {
                categoryColor: '#FD9498',
                categoryName: 'car',
            },
            {
                categoryColor: '#C5BAFF',
                categoryName: 'health',
            },
            {
                categoryColor: '#6E78E8',
                categoryName: 'childrencare',
            },
            {
                categoryColor: '#4A56E2',
                categoryName: 'household',
            },
            {
                categoryColor: '#81E1FF',
                categoryName: 'education',
            },
            {
                categoryColor: '#24CCA7',
                categoryName: 'leisure',
            },
            {
                categoryColor: '#00AD84',
                categoryName: 'other',
            },
        ],
        expenseDataSet: {
            title: 'Select a category',
            data: [
                { text: 'Main', value: 'main'},
                { text: 'House', value: 'house'},
                { text: 'Children', value: 'children'},
                { text: 'Development', value: 'development'},
                { text: 'Food', value: 'food'},
                { text: 'Basic', value: 'basic'},
                { text: 'Products', value: 'products'},
                { text: 'Car', value: 'car'},
                { text: 'Child care', value: 'child care'},
                { text: 'Household', value: 'household'},
                { text: 'Education', value: 'education'},
                { text: 'Leisure', value: 'leisure'},
                { text: 'Other', value: 'other'}
            ]
        },
        incomeDataSet: {
            title: 'Select a category',
            data: [
                { text: 'Salary', value: 'salary'},
                { text: 'Other', value: 'other'},
            ]
        }
    },
    DATE: {
        defaultSelectDataSet: {
            title: 'Example title',
            data: [
                { text: 'example text 1', value: 'example value 1'},
                { text: 'example text 2', value: 'example value 2'},
                { text: 'example text 3', value: 'example value 3'},
                { text: 'example text 4', value: 'example value 4'},
            ]
        },

        monthDataSet: {
            title: 'Month',
            data: [
                { text: 'January', value: '1'},
                { text: 'February', value: '2'},
                { text: 'March', value: '3'},
                { text: 'April', value: '4'},
                { text: 'May', value: '5'},
                { text: 'June', value: '6'},
                { text: 'July', value: '7'},
                { text: 'August', value: '8'},
                { text: 'September', value: '9'},
                { text: 'October', value: '10'},
                { text: 'November', value: '11'},
                { text: 'December', value: '12'},
            ]
        },
        
        defaultNumberOfYearsInInput: 5
    }
};
