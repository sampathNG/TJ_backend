const fs = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");

fs.initializeApp({
  credential: fs.credential.cert(serviceAccount)
});
const db = fs.firestore()
const express = require("express")
const bcrypt = require('bcrypt')

const {genereateToken,authenticateToken} = require("./jwt")
const router = express.Router()

// adding employee profile details,education,address,aadhar card,pam card

router.post("/profile/:name",async (req,res)=>{
    try{
        const data = {
            first_name :req.body.first_name,
            last_name : req.body.last_name,
            DOB:req.body.dob,
            gender:req.body.gender,
            phone:req.body.phone,
            email:req.body.email,
            school_institution:req.body.school_institution,
            school:req.body.school,
            percentage:req.body.percentage,
            high_school_institution:req.body.high_school_institution,
            high_school:req.body.high_school,
            high_percentage:req.body.high_percentage,
            degree_institution:req.body.degree_institution,
            degree:req.body.degree,
            degree_percentage:req.body.percentage,
            pg_institution:req.body.pg_institution,
            pg:req.body.pg,
            pg_percentage:req.body.pg_percentage,
            address:req.body.address,
            aadharcard:req.body.aadharcard,
            pancard:req.body.pancard
        }
        await db.collection("employee").doc(req.params.name).collection(req.params.name+" details").doc("profile details")
        .set(data)
        res.send("profile details added succesfully")
        console.log("profile details added succesfully")
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }
})

// updating employee profile details,education,address,aadhar card,pam card

router.post("/profile_update/:name",authenticateToken,async (req,res)=>{
    try{
        const data = {
            first_name :req.body.first_name,
            last_name : req.body.last_name,
            DOB:req.body.dob,
            gender:req.body.gender,
            phone:req.body.phone,
            email:req.body.email,
            school_institution:req.body.school_institution,
            school:req.body.school,
            percentage:req.body.percentage,
            high_school_institution:req.body.high_school_institution,
            high_school:req.body.high_school,
            high_percentage:req.body.high_percentage,
            degree_institution:req.body.degree_institution,
            degree:req.body.degree,
            degree_percentage:req.body.percentage,
            pg_institution:req.body.pg_institution,
            pg:req.body.pg,
            pg_percentage:req.body.pg_percentage,
            address:req.body.address,
            aadharcard:req.body.aadharcard,
            pancard:req.body.pancard

        }
        await db.collection("employee").doc(req.params.name).collection(req.params.name+" details").doc("profile details")
        .update(data)
        res.send("profile details updated succesfully")
        console.log("profile details updated succesfully")
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }
})

// deleting employee profile,education,address,aadhar card,pam card

router.delete("/profile_delete/:name",authenticateToken, async (req,res)=>{
    try{
        await db.collection("employee").doc(req.params.name).collection(req.params.name+" details").doc("profile details")
        .delete(data)
        res.send("profile details deleted succesfully")
        console.log("profile details deleated succesfully")
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }
})

// get employee profile details,education,address,aadhar card,pam card

router.get("/profile_get/:name",authenticateToken,async (req,res)=>{
    try{
       const query= await db.collection("employee").doc(req.params.name).collection(req.params.name+" details").doc("profile details")
        .get()
        res.send(query.data())
        console.log(query.data())
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }
})

// add bank details

router.post("/bank/:name",authenticateToken,async (req,res)=>{
    try{
        const data = {
            name:req.body.name,
            bank_name:req.body.bank_name,
            account_number:req.body.account_number,
            ifsc_code:req.body.ifsc_code       
        }
        await db.collection("employee").doc(req.params.name).collection(req.params.name+" details").doc("bank details")
        .set(data)
        res.send("bank details added succesfully")
        console.log("bank details added succesfully")
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }
})

// update employee bank details

router.post("/bank_update/:name",authenticateToken,async (req,res)=>{
    try{
        const data = {
            name:req.body.name,
            bank_name:req.body.bank_name,
            account_number:req.body.account_number,
            ifsc_code:req.body.ifsc_code       
        }
        await db.collection("employee").doc(req.params.name).collection(req.params.name+" details").doc("bank details")
        .update(data)
        res.send("bank details updated succesfully")
        console.log("bank details updated succesfully")
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }
})

// get bank details

router.get("/bank_get/:name",authenticateToken,async (req,res)=>{
    try{
       const query= await db.collection("employee").doc(req.params.name).collection(req.params.name+" details").doc("bank details")
        .get()
        res.send(query.data())
        console.log(query.data())
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }
})

// delete employee bank details

router.delete("/bank_delete/:name",authenticateToken, async (req,res)=>{
    try{
        await db.collection("employee").doc(req.params.name).collection(req.params.name+" details").doc("bank details")
        .delete(data)
        res.send("bank details deleted succesfully")
        console.log("bank details deleated succesfully")
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }
})

// create office profile

router.post("/office_profile/:name",authenticateToken,async (req,res)=>{
    try{
        const data = {
            job_title:req.body.job_title,
            date_of_joining:req.date_of_joining,
            probation_period:req.body.probation_period,
            earned_leaves:req.body.earned_leaves     
        }
        await db.collection("employee").doc(req.params.name).collection(req.params.name+" details").doc("office profile")
        .set(data)
        res.send("office profile added succesfully")
        console.log("office profile added succesfully")
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }
})

// update office profile

router.post("/office_profile_update/:name",authenticateToken,async (req,res)=>{
    try{
        const data = {
            job_title:req.body.job_title,
            date_of_joining:req.date_of_joining,
            probation_period:req.body.probation_period,
            earned_leaves:req.body.earned_leaves     
        }
        await db.collection("employee").doc(req.params.name).collection(req.params.name+" details").doc("office profile")
        .update(data)
        res.send("office profile update succesfully")
        console.log("office profile updated succesfully")
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }
})

// get office profile

router.get("/office_profile_get/:name",authenticateToken,async (req,res)=>{
    try{
       const query= await db.collection("employee").doc(req.params.name).collection(req.params.name+" details").doc("office profile")
        .get()
        res.send(query.data())
        console.log(query.data())
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }
})

// delete office profile

router.delete("/office_profile_delete/:name", authenticateToken,async (req,res)=>{
    try{
        await db.collection("employee").doc(req.params.name).collection(req.params.name+" details").doc("office profile")
        .delete(data)
        res.send("office profile deleted succesfully")
        console.log("office profile deleated succesfully")
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }
})



// add employee

router.post("/add_employ/:name",async (req,res)=>{
    try{
        const pass = await bcrypt.hash(req.body.create_password, 10);
        const data = {
            employee_number:req.body.employee_number,
            email:req.body.email,
            employee_post:req.body.employee_post,
            dob:req.body.dob,
            probation_period:req.body.probation_period,
            earned_leaves:req.body.earned_leaves,
            salary:req.body.salary,
            create_password:pass
        }
        await db.collection("employee").doc(req.params.name).collection(req.params.name+" details").doc("add employee")
        .set(data)
        res.send("profile details added succesfully")
        console.log("profile details added succesfully")
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }
})

// employee login

router.post("/login/:name", async (req,res)=>{
    if(req.body.employee_number === undefined || req.body.password === undefined ){
        res.send("both employee_number and password are required")
        console.log("both employeee_no and password are required")
    }else{
        try{
            const data = await db.collection("employee").doc(req.params.name).collection(req.params.name+" details").doc("add employee")
            .where('employee_number','===','req.body.employee_number')
            if(data){
                const compare = bcrypt.compareSync(req.body.password,data.create_password)
                if(compare){
                    const token = genereateToken(req.body)
                    res.send(token)
                    console.log(token)
                }else{
                    res.send("wrong password entered")
                }
            }else{
                res.send("employee not foung")
            }
        }
        catch(err){
            res.send({err:err.message})
            console.log(err)
        }

    }
})



// daily work log

router.post("/work_log", authenticateToken,async(req,res)=>{
    try{
        const data = {
            serial_number:req.body.serial_number,
            project_name:req.body.project_name,
            task_title:req.nody.task_title,
            due_date:req.body.due_date,
            estimated_hours:req.body.estimated_hours,
            task_status:req.body.task_title
        }
        await db.collection("daily work log").doc("work status").set(data)
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }
})

// update daily work llog

router.post("/work_log__update",authenticateToken,async(req,res)=>{
    try{
        const data = {
            serial_number:req.body.serial_number,
            project_name:req.body.project_name,
            task_title:req.body.task_title,
            due_date:req.body.due_date,
            estimated_hours:req.body.estimated_hours,
            task_status:req.body.task_title
        }
        await db.collection("daily work log").doc("work status").update(data)
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }    
})

// get daily work log

router.get("/work_log_get",authenticateToken,async (req,res)=>{
    try{
       const query= await db.collection("daily work log").doc("work status")
        .get()
        res.send(query.data())
        console.log(query.data())
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }
})

router.delete("/work_log_delete",authenticateToken,async(req,res)=>{
    try{
        await db.collection("daily work log").doc("work status")
        .delete(data)
        res.send("work log deleted success")
        console.log("work log deelted success")
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }
})

// attendance

router.post("/attend_status", authenticateToken,async(req,res)=>{
    try{
        const data = {
            date:req.body.date,
            check_in:req.body.check_in,
            check_out:req.body.chechk_out,
            work_hours:req.body.work_hours,
            remarks:req.body.remarks
        }
        await db.collection("attendance").doc("attendance status").set(data)
        res.send("attendance status added")
        console.log("attendance status added")
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }
})

// update attendance status

router.post("/attend_status_update", authenticateToken,async(req,res)=>{
    try{
        const data = {
            date:req.body.date,
            check_in:req.body.check_in,
            check_out:req.body.chechk_out,
            work_hours:req.body.work_hours,
            remarks:req.body.remarks
        }
        await db.collection("attendance").doc("attendance status").update(data)
        res.send("attendance status updated")
        console.log("attendance status updated")
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }
})

// get attendance
router.get("/attend_status_get",authenticateToken,async (req,res)=>{
    try{
       const query= await db.collection("attendance").doc("attendance status")
        .get()
        res.send(query.data())
        console.log(query.data())
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }
})

// delete attendance status

router.delete("/attend_status_delete",authenticateToken,async(req,res)=>{
    try{
        await db.collection("attendance").doc("attendance status")
        .delete(data)
        res.send("attendance deleted success")
        console.log("attendance deelted success")
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }
})

// leave status

router.post("/leave_status", authenticateToken,async(req,res)=>{
    try{
        const data = {
            leave:req.body.leave,
            raised:req.body.raised,
            pending:req.body.pending,
            approved:req.body.approved,
            cancelled:req.body.cancelled,
            requests:req.body.requests
        }
        await db.collection("attendance").doc("leave status").set(data)
        res.send("leave status added")
        console.log("leave status added")
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }
})

// update leave status

router.post("/leave_status_update",authenticateToken, async(req,res)=>{
    try{
        const data = {
            leave:req.body.leave,
            raised:req.body.raised,
            pending:req.body.pending,
            approved:req.body.approved,
            cancelled:req.body.cancelled,
            requests:req.body.requests
        }
        await db.collection("attendance").doc("leave status").update(data)
        res.send("leave status added")
        console.log("leave status added")
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }
})

// get leave status

router.get("/leave_status_get",authenticateToken,async (req,res)=>{
    try{
       const query= await db.collection("attendance").doc("leave status")
        .get()
        res.send(query.data())
        console.log(query.data())
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }
})

// delete leave status

router.delete("/leave_status_delete",authenticateToken,async(req,res)=>{
    try{
        await db.collection("attendance").doc("leave status")
        .delete(data)
        res.send("leave status deleted success")
        console.log("leave status deelted success")
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }
})

// add employee

router.post("/add_employ/:name",authenticateToken,async (req,res)=>{
    try{
        const data = {
            employee_number:req.body.employee_number,
            email:req.body.email,
            employee_post:req.body.employee_post,
            dob:req.body.dob,
            probation_period:req.body.probation_period,
            earned_leaves:req.body.earned_leaves,
            salary:req.body.salary,
            create_password:req.body.create_password
        }
        await db.collection("employee").doc(req.params.name).collection(req.params.name+" details").doc("add employee")
        .set(data)
        res.send("profile details added succesfully")
        console.log("profile details added succesfully")
    }
    catch(err){
        res.send({err:err.message})
        console.log(err)
    }
})

// login emoloyeee and geneerate token

// router.post("/login",async(req,res)=>{
    
// })


module.exports = router
