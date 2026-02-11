import EMI from "../models/EmiModel.js";
import loanModel from "../models/loanModel.js";
export const generateInterestSchedule = (interestRate,amount,tenureMonths,loanid) => {
    const R = interestRate;
    const N = tenureMonths;
    const P = amount;

    const emiamount = (P*R*Math.pow(1+R,N))/(Math.pow(1+R,N)-1);
    let balance  = P;
    const emis=[];
    for(let i =1;i<=N;i++){
        const  interest = balance*R;
        const principal = emiamount - interest;
        balance -= principal;
        const duedate = new Date();
        duedate.setMonth(duedate.getMonth()+i);
        emis.push({
            loanId:loanid,
            principal: principal,
            installementNumber:i,
            dueDate:duedate,
            Interest:interest,
            totalAmout:emiamount,
            status:"PENDING"
        })
    }
 return emis;
};

export const  calculatePenalty =(duedate,emiAmount)=>{
    const rate=1;
    const  today = new Date();
    if(today <= dueDate)return 0;
    const lateDays = Math.ceil ((today-duedate)/(1000*60*60*24));
    return Number (((emiAmount*rate*lateDays)/100).toFixed(2));
}


export const payEmiService= async (loanId)=>{
    const emi= await loanModel.find({loanApplicationId:loanId});
    console.log(emi);
    if(!emi)throw new Error ("Emi not found");
    const  penalty = calculatePenalty(emi.dueDate,emi.totalAmout);
    emi.penalty = penalty;
    emi.status="PAID",
    emi.paidDate = new Date();
    await emi.save(emi);
    return {
        totalPaid: emi.totalAmout+penalty,
        penalty
    };
};

export const getEmiService = async(loanId)=>{
    console.log(loanId);
    
    const loan= await loanModel.findOne({loanApplicationId:loanId});
    console.log(loan._id)
    console.log("loann")
    const emis = await EMI.find({loanId:loan._id})
    console.log(loan._id)
    console.log("emis")
    console.log(emis);
    // return emis.map((emi)=>{
    //     if(emi.status==="PENDING")
    //     {
    //         const penalty = calculatePenalty(emi.dueDate,emi.totalAmout);
    //         return {...emi.toObject(),penalyAmount:penalty};
    //     }return emi
    // })
    return emis;
}