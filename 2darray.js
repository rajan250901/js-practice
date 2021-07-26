function array(arr)
{
    console.log(" two dimensional array :");
    for(let i=0;i<3 ; i++)
    {
        let text = "";
        for(let j=0;j<3 ; j++)
        {
            text+=arr[i][j] + "  ";
        }
        console.log(text);
    }
}
const arr1 = [[1,2,3],[4,5,6],[7,8,9]];
array(arr1);