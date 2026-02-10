import EMI from "../model/EmiModel.js";

export const generateInterestSchedule = (loan) => {
    const R = loan.interestRate;
    const N = loan.tenureMonths;
    const P = loan.amount;

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
            loanId:loan._id,
            principal: principal,
            installementNumber:i,
            dueDate:duedate,
            Interest:interest,
            totalAmout:emiamount
        })
    }
 return emis;
};

export const  calculatePenalty =(duedate,emiAmount,rate=1)=>{
    const  today = new Date();
    if(today <= dueDate)return 0;
    const lateDays = Math.ceil ((today-duedate)/(1000*60*60*24));
    return Number (((emiAmount*rate*lateDays)/100).toFixed(2));
}


export const payEmiService= async (loanId)=>{
    const emi= await EMI.findById(loanId);
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
    const emis = await EMI.find({loanId});
    return emis.map((emi)=>{
        if(emi.status==="PENDING")
        {
            const penalty = calculatePenalty(emi.dueDate,emi.totalAmout);
            return {...emi.toObject(),penalyAmount:penalty};
        }return emi
    })
}