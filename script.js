// Create your own resume data in JSON format
var resume = [{
"Introduction": {
    "name":"Roobini S", "Contact No":12345678, "Email id":"Roobini81@gmail.com"
}
},
{"professionalHistory":{
    "Experince1":"Currently working at Voltas Limited (TMD) in Coimbatore from Nov-16 to till date of 7 Years experience as support executive",
    "Experince2":"Worked at Caliber interconnect solutions pvt limited in Coimbatore as documentation assistant" 
}
},
{"gistofKnowledge":{
        "Tools":"Knowledge in Excel,Word,PPT",
        "Reports1":"Providing MIS_Report to management",
        "Reports2":"Periodic update in Engineer Skill matrix",
        "Reports3":"Organising training process and handling the new engineers and tracking their performance",
        "Reports4":"Tracking the order flow and updating the status"
    }
},
{"eduationalQualification":
    {
        "M.Sc (CS)": "Completed M.Sc in Ramakrishna college of Arts & Science for women affiliated to Bharathiar University Coimbatore with 77% in May 2014",
        "B.SC (CS)": "Completed B.Sc in Ramakrishna college of Arts & Science for women affiliated to Bharathiar University Coimbatore 73% in May-2012",
        "XII": "Completed XII in May 2009 with 69% in CSI Girls Higher secondary school, in Coimbatore",
        "X": "Completed X in May 2007 with 74.75% in Ramanathapuram Girls Higher secondary school, in Coimbatore"
    }
},
{"personalDetails":
    {
        "name":"Roobini S", "Father Name":"Mr. N Subramanian", "Mother Name":"Mrs. K Gomathi","Date of Birth": 15031990,"Gender":"Female",
        "Martial Status":"Married","Address":"Site No 40,TGK nagar near anand garden Thoppampatti Thudiyalur Post Coimbatore- 641017"
    }
}
]

//For the above JSON, iterate overall for loops (for, for in, for of, for each)
    // for loop
        for(var i=0;i<resume.length;i++)
            {
                const obj = resume[i];
                console.log(obj.personalDetails);
            }
    
    // for in Loop
        

    // for of Loop
            let b = "Introduction";
            for (let b of resume)
                {
                    var i = resume[b];
                }
                console.log(b);

    // forEach Loop
    resume.forEach((a) => {
        console.log(a.eduationalQualification)
    })