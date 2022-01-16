var trip = ["doctor", "dialysis"]
var whichTrip = ["a", "b"]
var patient = ["GS", "DP", "SD", "MT", "AR", "PM"];

var workingNarative = "";
var blankATrip = "";
var blankBTrip = "";

var blankADialysisTrip = "Southern Care EMS was dispatched to private residence (@@) for routine transport of an ESRD Pt to dialysis clinic (##) for specialized yet scheduled tx.  Unit 08504 arrived on the scene to find a && y/o ** complaining of general weakness and Pt. has an unsteady/unreliable gait.  Pt. has medical HX of: ESRD, CAD, hypertension, dyslipidemia, anemia, othostatic hypotension,  and repeated falls. Pt is a fall risk and requires stretcher transport.\n  Pt. found c/o/ax4 with PEARL. Resp. __, regular, full, non-labored.  Sa02 is __% on room air. Pulse ___, B/P ___/___.  Skin is warm, pink and dry. No obvious signs of shock or trauma noted.  Pt has pain of __/10 on the pain scale.  No other complaints at this time. \n Pt vitals were monitored throughout transport.  Pt has ESRD and is in need of hemodialysis Tx. Pt was assessed for signs of shock and trauma and moved to the stretcher via 2 medic assist.  Pt adjusted to POC (semi fowlers). The straps (5) were secured, rails raised and the stretcher was rolled to the ambulance and loaded.  Transport was non-emergency and Pt. remained stable.  Vitals were taken (see vitals section of report for specific findings) and the Pt was monitored throughout transport. On arrival to $$, the stretcher was removed with the straps secured and the rails up.  Pt was moved into clinic without incident.  Pt weighed and  transferred to Tx chair via 2 medic assist.  The Pt. condition was verbally reported to the nurse. Pt left in stable/unchanged condition.  Med unit returned to service. ";

var blankBDialysisTrip = "Southern Care EMS was dispatched to $$ (##) for routine transport of an ESRD Pt to private residence (@@) post specialized yet scheduled tx.  Unit 08504 arrived on the scene to find a && y/o ** complaining of general weakness and Pt. has an unsteady/unreliable gait.  Pt. has medical HX of: ESRD, CAD, hypertension, dyslipidemia, anemia, othostatic hypotension, and repeated falls. Pt is a fall risk and requires stretcher transport.  \nPt. found c/o/ax4 with PEARL. Resp. --, regular, full, non-labored.  Sa02 is ---% on room air. Pulse ---, B/P ---/---.  Skin is warm, pink and dry. No obvious signs of shock or trauma noted.  Pt has pain of __/10 on the pain scale.  No other complaints at this time.  Pt vitals were monitored throughout transport.\nPt was assessed for signs of shock and trauma and moved to the stretcher via 2 medic assist.  Pt adjusted to POC (semi fowlers). The straps (5) were secured, rails raised and the stretcher was rolled to the ambulance and loaded.  Transport was non-emergency and Pt. remained stable.  Vitals were taken (see vitals section of report for specific findings) and the Pt was monitored throughout transport. On arrival to residence, the stretcher was removed with the straps secured and the rails up.  Pt was moved into residence without incident.  Pt transferred from stretcher via 2 medic assist.  The Pt. care transferred to the pt. Pt left in stable/unchanged condition. ";

var blankADoctorTrip = "Southern Care EMS was dispatched to private residence (@@) for transport of an ESRD Pt to ^^ (++) for specialized yet scheduled tx.  Unit 08504 arrived on the scene to find a && y/o ** complaining of general weakness and Pt. has an unsteady/unreliable gait.  Pt. has medical HX of: ESRD, CAD, hypertension, dyslipidemia, anemia, othostatic hypotension,  and repeated falls. Pt is a fall risk and requires stretcher transport.\n  Pt. found c/o/ax4 with PEARL. Resp. __, regular, full, non-labored.  Sa02 is __% on room air. Pulse ___, B/P ___/___.  Skin is warm, pink and dry. No obvious signs of shock or trauma noted.  Pt has pain of __/10 on the pain scale.  No other complaints at this time. \n Pt vitals were monitored throughout transport.  Pt has ESRD and is in need of hemodialysis Tx. Pt was assessed for signs of shock and trauma and moved to the stretcher via 2 medic assist.  Pt adjusted to POC (semi fowlers). The straps (5) were secured, rails raised and the stretcher was rolled to the ambulance and loaded.  Transport was non-emergency and Pt. remained stable.  Vitals were taken (see vitals section of report for specific findings) and the Pt was monitored throughout transport. On arrival to ^^, the stretcher was removed with the straps secured and the rails up.  Pt was moved into the facility without incident.  Pt was transferred to Tx chair via 2 medic assist.  The Pt. condition was verbally reported to the nurse. Pt left in stable/unchanged condition.  Med unit returned to service. ";

var blankBDoctorTrip = "Southern Care EMS was dispatched to ^^ (++) for routine transport of a patient to private residence (@@) post specialized yet scheduled tx.  Unit 08504 arrived on the scene to find a && y/o ** complaining of general weakness and Pt. has an unsteady/unreliable gait.  Pt. has medical HX of: ESRD, CAD, hypertension, dyslipidemia, anemia, othostatic hypotension, and repeated falls. Pt is a fall risk and requires stretcher transport.  \nPt. found c/o/ax4 with PEARL. Resp. --, regular, full, non-labored.  Sa02 is ---% on room air. Pulse ---, B/P ---/---.  Skin is warm, pink and dry. No obvious signs of shock or trauma noted.  Pt has pain of __/10 on the pain scale.  No other complaints at this time.  Pt vitals were monitored throughout transport.\nPt was assessed for signs of shock and trauma and moved to the stretcher via 2 medic assist.  Pt adjusted to POC (semi fowlers). The straps (5) were secured, rails raised and the stretcher was rolled to the ambulance and loaded.  Transport was non-emergency and Pt. remained stable.  Vitals were taken (see vitals section of report for specific findings) and the Pt was monitored throughout transport. On arrival to residence, the stretcher was removed with the straps secured and the rails up.  Pt was moved into residence without incident.  Pt transferred from stretcher via 2 medic assist.  The Pt. care transferred to the pt. Pt left in stable/unchanged condition. ";

var blankABDoctorTrip = "Southern Care EMS was dispatched to $$ (@@) for transport of an ESRD Pt to ^^ (++) for specialized yet scheduled tx.  Unit 08504 arrived on the scene to find a && y/o ** complaining of general weakness and Pt. has an unsteady/unreliable gait.  Pt. has medical HX of: ESRD, CAD, hypertension, dyslipidemia, anemia, othostatic hypotension,  and repeated falls. Pt is a fall risk and requires stretcher transport.\n  Pt. found c/o/ax4 with PEARL. Resp. __, regular, full, non-labored.  Sa02 is __% on room air. Pulse ___, B/P ___/___.  Skin is warm, pink and dry. No obvious signs of shock or trauma noted.  Pt has pain of __/10 on the pain scale.  No other complaints at this time. \n Pt vitals were monitored throughout transport.  Pt has ESRD and is in need of hemodialysis Tx. Pt was assessed for signs of shock and trauma and moved to the stretcher via 2 medic assist.  Pt adjusted to POC (semi fowlers). The straps (5) were secured, rails raised and the stretcher was rolled to the ambulance and loaded.  Transport was non-emergency and Pt. remained stable.  Vitals were taken (see vitals section of report for specific findings) and the Pt was monitored throughout transport. On arrival to ^^, the stretcher was removed with the straps secured and the rails up.  Pt was moved into the facility without incident.  Pt was transferred to Tx chair via 2 medic assist.  The Pt. condition was verbally reported to the nurse. Pt left in stable/unchanged condition.  Med unit returned to service. ";

var blankBADoctorTrip = "Southern Care EMS was dispatched to ^^ (++) for transport of an ESRD Pt to $$ (##), post doctor's appointment, for specialized yet scheduled tx.  Unit 08504 arrived on the scene to find a && y/o ** complaining of general weakness and Pt. has an unsteady/unreliable gait.  Pt. has medical HX of: ESRD, CAD, hypertension, dyslipidemia, anemia, othostatic hypotension,  and repeated falls. Pt is a fall risk and requires stretcher transport.\n  Pt. found c/o/ax4 with PEARL. Resp. __, regular, full, non-labored.  Sa02 is __% on room air. Pulse ___, B/P ___/___.  Skin is warm, pink and dry. No obvious signs of shock or trauma noted.  Pt has pain of __/10 on the pain scale.  No other complaints at this time. \n Pt vitals were monitored throughout transport.  Pt has ESRD and is in need of hemodialysis Tx. Pt was assessed for signs of shock and trauma and moved to the stretcher via 2 medic assist.  Pt adjusted to POC (semi fowlers). The straps (5) were secured, rails raised and the stretcher was rolled to the ambulance and loaded.  Transport was non-emergency and Pt. remained stable.  Vitals were taken (see vitals section of report for specific findings) and the Pt was monitored throughout transport. On arrival to $$, the stretcher was removed with the straps secured and the rails up.  Pt was moved into the facility without incident.  Pt was transferred to Tx chair via 2 medic assist.  The Pt. condition was verbally reported to the nurse. Pt left in stable/unchanged condition.  Med unit returned to service. ";

function generateDialysisNarative()
{
    var selectionDialysisOne = document.getElementById("selectionDialysisOne").value 
    var selectionDialysisTwo = document.getElementById("selectionDialysisTwo").value  
    var currentDate = new Date(Date.now()).toString();

    switch(selectionDialysisOne)
    {
        case "A":
                workingNarative = blankADialysisTrip;
                break;
        case "B":
                workingNarative = blankBDialysisTrip;
                break;
    }
    
    switch(selectionDialysisTwo)
    {
        case "GS":
                // Address
                workingNarative = workingNarative.replace("@@", "1654 Selma place, Macon, Georgia, 31204");
                // Dialysis Clinic
                workingNarative = workingNarative.replace("##", "US Renal Care Macon-Pine, 745 Pine St, Macon, Georgia, 31201")
                workingNarative = workingNarative.replaceAll("$$", "US Renal Care Macon-Pine")
                // Age 
                workingNarative = workingNarative.replace("&&", getAge(new Date(1952, 9, 31)))
                // Gender
                workingNarative = workingNarative.replace("**", "female")

                break;
        case "DP":
                // Address
                workingNarative = workingNarative.replace("@@", "1012 Pinewood Park Boulevard, Macon, Georgia, 31210");
                // Dialysis Clinic
                workingNarative = workingNarative.replace("##", "US Renal Care Macon-Pine, 745 Pine St, Macon, Georgia, 31201")
                workingNarative = workingNarative.replaceAll("$$", "US Renal Care Macon-Pine")
                // Age 
                workingNarative = workingNarative.replace("&&", getAge(new Date(1962, 2, 23)))
                // Gender
                workingNarative = workingNarative.replace("**", "female")

                break;
        case "SD":
                // Address
                workingNarative = workingNarative.replace("@@", "30 Durham Drive, Macon, Georgia, 31217");
                // Dialysis Clinic
                workingNarative = workingNarative.replace("##", "US Renal Care Macon-Pine, 745 Pine St, Macon, Georgia, 31201")
                workingNarative = workingNarative.replaceAll("$$", "US Renal Care Macon-Pine")
                // Age 
                workingNarative = workingNarative.replace("&&", getAge(new Date(1950, 0, 23)))
                // Gender
                workingNarative = workingNarative.replace("**", "male")

                break;
        case "MT":
                // Address
                workingNarative = workingNarative.replace("@@", "505 colesium dr, Macon, Georgia, 31201");
                // Dialysis Clinic
                workingNarative = workingNarative.replace("##", "US Renal Care Macon-Clinton, 280 Clinton St, Macon, Georgia, 31201")
                workingNarative = workingNarative.replaceAll("$$", "US Renal Care Macon-Clinton")
                // Age 
                workingNarative = workingNarative.replace("&&", getAge(new Date(1947, 10, 1)))
                // Gender
                workingNarative = workingNarative.replace("**", "female")

                break;
        case "AR":
                // Address
                workingNarative = workingNarative.replace("@@", "681 Hara Dr, Macon, Georgia, 31206");
                // Dialysis Clinic
                workingNarative = workingNarative.replace("##", "US Renal Care Macon-Clinton, 280 Clinton St, Macon, Georgia, 31201")
                workingNarative = workingNarative.replaceAll("$$", "US Renal Care Macon-Clinton")
                // Age 
                workingNarative = workingNarative.replace("&&", getAge(new Date(1938, 11, 12)))
                // Gender
                workingNarative = workingNarative.replace("**", "male")

                break;
        case "PM":
                // Address
                workingNarative = workingNarative.replace("@@", "715 Mason terrace apt. 8, Perry, Georgia, 31069");
                // Dialysis Clinic
                workingNarative = workingNarative.replace("##", "DaVita Perry Dialysis Center, 1014 Kieth Dr, Perry, Georgia, 31069")
                workingNarative = workingNarative.replaceAll("$$", "DaVita Perry Dialysis Center")
                // Age 
                workingNarative = workingNarative.replace("&&", getAge(new Date(1954, 2, 6)))
                // Gender
                workingNarative = workingNarative.replace("**", "female")

                break;
    }
    console.log(workingNarative);
    document.getElementById("narativeDialysis").textContent = workingNarative;
}

function generateDoctorNarative()
{
    var selectionDoctorOne = document.getElementById("selectionDoctorOne").value;
    var textDoctorOne = document.getElementById("textDoctorOne").value;
    var textDoctorTwo = document.getElementById("textDoctorTwo").value;
    var selectionDoctorTwo = document.getElementById("selectionDoctorTwo").value;

    switch(selectionDoctorOne)
    {
        case "A trip from home to doctor":
            workingNarative = blankADoctorTrip;
            break;

        case "A trip from dialysis to doctor":
            workingNarative = blankABDoctorTrip;
            break;

        case "B trip from doctor to dialysis":
            workingNarative = blankBADoctorTrip;
            break;

        case "B trip from doctor to home":
            workingNarative = blankBDoctorTrip;
            break;

    }

    switch(selectionDoctorTwo)
    {
        case "GS":
                // Address
                workingNarative = workingNarative.replace("@@", "1654 Selma place, Macon, Georgia, 31204");
                // Dialysis Clinic
                workingNarative = workingNarative.replace("##", "US Renal Care Macon-Pine, 745 Pine St, Macon, Georgia, 31201")
                workingNarative = workingNarative.replaceAll("$$", "US Renal Care Macon-Pine")
                // Age 
                workingNarative = workingNarative.replace("&&", getAge(new Date(1952, 9, 31)))
                // Gender
                workingNarative = workingNarative.replace("**", "female")
                // Doctor's name
                workingNarative = workingNarative.replace("^^", textDoctorOne);
                // Doctor's address
                workingNarative = workingNarative.replace("++", textDoctorTwo);

                break;
        case "DP":
                // Address
                workingNarative = workingNarative.replace("@@", "1012 Pinewood Park Boulevard, Macon, Georgia, 31210");
                // Dialysis Clinic
                workingNarative = workingNarative.replace("##", "US Renal Care Macon-Pine, 745 Pine St, Macon, Georgia, 31201")
                workingNarative = workingNarative.replaceAll("$$", "US Renal Care Macon-Pine")
                // Age 
                workingNarative = workingNarative.replace("&&", getAge(new Date(1962, 2, 23)))
                // Gender
                workingNarative = workingNarative.replace("**", "female")
                // Doctor's name
                workingNarative = workingNarative.replace("^^", textDoctorOne);
                // Doctor's address
                workingNarative = workingNarative.replace("++", textDoctorTwo);

                break;
        case "SD":
                // Address
                workingNarative = workingNarative.replace("@@", "30 Durham Drive, Macon, Georgia, 31217");
                // Dialysis Clinic
                workingNarative = workingNarative.replace("##", "US Renal Care Macon-Pine, 745 Pine St, Macon, Georgia, 31201")
                workingNarative = workingNarative.replaceAll("$$", "US Renal Care Macon-Pine")
                // Age 
                workingNarative = workingNarative.replace("&&", getAge(new Date(1950, 0, 23)))
                // Gender
                workingNarative = workingNarative.replace("**", "male")
                // Doctor's name
                workingNarative = workingNarative.replace("^^", textDoctorOne);
                // Doctor's address
                workingNarative = workingNarative.replace("++", textDoctorTwo);

                break;
        case "MT":
                // Address
                workingNarative = workingNarative.replace("@@", "505 colesium dr, Macon, Georgia, 31201");
                // Dialysis Clinic
                workingNarative = workingNarative.replace("##", "US Renal Care Macon-Clinton, 280 Clinton St, Macon, Georgia, 31201")
                workingNarative = workingNarative.replaceAll("$$", "US Renal Care Macon-Clinton")
                // Age 
                workingNarative = workingNarative.replace("&&", getAge(new Date(1947, 10, 1)))
                // Gender
                workingNarative = workingNarative.replace("**", "female")
                // Doctor's name
                workingNarative = workingNarative.replace("^^", textDoctorOne);
                // Doctor's address
                workingNarative = workingNarative.replace("++", textDoctorTwo);

                break;
        case "AR":
                // Address
                workingNarative = workingNarative.replace("@@", "681 Hara Dr, Macon, Georgia, 31206");
                // Dialysis Clinic
                workingNarative = workingNarative.replace("##", "US Renal Care Macon-Clinton, 280 Clinton St, Macon, Georgia, 31201")
                workingNarative = workingNarative.replaceAll("$$", "US Renal Care Macon-Clinton")
                // Age 
                workingNarative = workingNarative.replace("&&", getAge(new Date(1938, 11, 12)))
                // Gender
                workingNarative = workingNarative.replace("**", "male")
                // Doctor's name
                workingNarative = workingNarative.replace("^^", textDoctorOne);
                // Doctor's address
                workingNarative = workingNarative.replace("++", textDoctorTwo);

                break;
        case "PM":
                // Address
                workingNarative = workingNarative.replace("@@", "715 Mason terrace apt. 8, Perry, Georgia, 31069");
                // Dialysis Clinic
                workingNarative = workingNarative.replace("##", "DaVita Perry Dialysis Center, 1014 Kieth Dr, Perry, Georgia, 31069")
                workingNarative = workingNarative.replaceAll("$$", "DaVita Perry Dialysis Center")
                // Age 
                workingNarative = workingNarative.replace("&&", getAge(new Date(1954, 2, 6)))
                // Gender
                workingNarative = workingNarative.replace("**", "female")
                // Doctor's name
                workingNarative = workingNarative.replace("^^", textDoctorOne);
                // Doctor's address
                workingNarative = workingNarative.replace("++", textDoctorTwo);

                break;  
    }
    document.getElementById("narativeDoctor").textContent = workingNarative;
}

function getAge(birthDate)
{
    var currentDate = new Date(Date.now());
    var currentMonth = currentDate.getMonth();
    var currentDayOfMonth =  currentDate.getDate();

    var dateDifference = currentDate.getFullYear() - birthDate.getFullYear();

    if (birthDate.getMonth > currentMonth)
    {
        return dateDifference;
    } else if (birthDate.getMonth() === currentMonth)
    {
        if(birthDate.getDate() === currentDayOfMonth)
        { 
            return dateDifference;
        }
    } else 
    {
        return --dateDifference;
    }

}