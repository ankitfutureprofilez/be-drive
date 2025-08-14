import { useState } from 'react';
import Layout from '../Layout/Layout';
import FileTransferForm from './FileTransferForm';
import TransferFile from './TransferFile';
import ReceivedItem from './ReceivedItem';
import TransferSuccess from './TransferSuccess';
import FileUploadBox from './FileUploadBox';
export default function Main() {
  const [step, setStep] = useState(1);
  const [activeTab, setActiveTab] = useState('Link');
      const [selectedFiles, setSelectedFiles] = useState([]);
  
  return (
    <Layout>
      <div className="boxmodel">
        <FileUploadBox setStep={setStep} step={step}  setSelectedFiles={setSelectedFiles} />
        <FileTransferForm setStep={setStep} step={step} setActiveTab={setActiveTab} activeTab={activeTab}  selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles}/>
        <TransferSuccess step={step} setStep={setStep} type={activeTab} downloadLink={"https://be-drive.vercel.app/"} />
        <TransferFile setStep={setStep} step={step} />
        <ReceivedItem setStep={setStep} step={step}  selectedFiles={selectedFiles}/>
      </div>
    </Layout>
  );
}
