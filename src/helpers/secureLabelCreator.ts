
interface IResult {
    width: string;
    color: string;
}
type secureLabelCreatorType = (data: string) => IResult;

export const secureLabelCreator: secureLabelCreatorType = (incomeData) => {
    let resultColor = '';
    let resultWidth = '';

    const incomeDataLength = incomeData.length;
    const incomeDataToNumber = Number(incomeData);

    if(incomeDataLength < 6) {
        resultColor = '#FB7373';
        resultWidth = '25%';
    }

    if (incomeDataLength >= 6) {
        resultColor = '#FBB473';
        resultWidth = '50%';
    }
    if (incomeDataLength >= 6 && Number.isNaN(incomeDataToNumber)) {
        resultColor = '#F0FB73';
        resultWidth = '75%';
    }
    if (incomeDataLength >= 6 && Number.isNaN(incomeDataToNumber) && incomeData.toLowerCase() !== incomeData) {
        resultColor = '#7DFB73';
        resultWidth = '100%';
    }

    return {
        width: resultWidth,
        color: resultColor,
    };
};