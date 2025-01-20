import React from "react";
import data from "./Edu.json";

interface Education {
    degree: string;
    institution: string; 
    startDate: string; 
    endDate: string; 
    grade: string; 
    details: string[]; 
    imageSrc: string; 
}
  
const EducationList: React.FC = () =>{
    const education: Education[] = data;
    
    return(<div>
        {education.map((edu,index)=>(<div key ={index}>{edu.degree}, {edu.institution}</div>))}
    </div>)
}

export default EducationList;