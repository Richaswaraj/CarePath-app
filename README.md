<div align="center">
  <br />
  <a href="src\assets\carepath photo\carepath project.png" title="Project Screenshot" target="_blank">
    <img src="src\assets\carepath photo\carepath project.png" width="100%" alt="Project Screenshot"/>
  </a>
  <br />
  <div>
    <img src="https://img.shields.io/badge/-JavaScript-black?style=for-the-badge&logoColor=white&logo=javascript&color=F7DF1E" alt="javascript" />
    <img src="https://img.shields.io/badge/-Gemini AI-black?style=for-the-badge&logoColor=white&logo=gemini&color=412991" alt="gemini ai" />
  </div>
  <h3 align="center">CarePath-AI driven Personalized Treatment App </h3>
  <div align="center">
    Welcome to the AI Health Care project, a revolutionary AI assistant designed to provide personalized treatment by analyzing patient data, clinical guidelines, and medical records. Our goal is to identify health gaps and create tailored care plans to improve patient outcomes across various diseases.
  </div>
</div>


## 🤖 Introduction

AI Health Care provides an easy and efficient way to craft personalized health care using AI. It interacts with the Gemini AI to analyze and generate detailed treatment plans based on patient data and medical records.

## 🔋 Features

- **Personalized Treatment Plans**: Analyzes patient data, medical records, and guidelines to identify gaps in healthcare screening and follow-up care, crafting tailored treatment plans for individual patients.
- **Secure Data Sharing**: Shares sensitive data securely using encryption and cryptographic features, protecting patient information while facilitating necessary data access for healthcare providers.



## ⚙️ Setup and Deployment

### Prerequisites

- Node.js and npm installed


## 🚀 Usage

1. **Upload Reports**: Patients or healthcare providers can upload medical reports directly into the system.
2. **View Treatment Plan**: The AI assistant generates a detailed treatment plan based on the uploaded data and identified gaps.
3. **Track Progress**: Patients can monitor their progress, completed screenings, and upcoming appointments through a user-friendly dashboard.

## 🌠 Gemini AI Integration

Incorporating Gemini AI into our system provides additional layers of analysis and generative capabilities:

- **Detailed Image Analysis**: Gemini AI can process medical images uploaded by patients or healthcare providers, offering advanced diagnostic insights.
- **Advanced Natural Language Processing**: Enhances the accuracy of treatment plans and patient data analysis.
- **Scalable AI Infrastructure**: Leveraging Gemini AI's robust infrastructure allows for real-time data processing and analysis.

### Example of Using Gemini AI:

```javascript
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY);

const readFileAsBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

const handleFileUpload = async (file, filetype) => {
  const base64Data = await readFileAsBase64(file);
  const imageParts = [
    {
      inlineData: {
        data: base64Data,
        mimeType: filetype,
      },
    },
  ];

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
  const prompt = "Analyze this medical image and provide insights.";

  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  console.log(response.text());
};
```

