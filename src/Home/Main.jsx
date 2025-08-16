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
        <div className="box">
        {/* Step 1 */}
        <FileUploadBox setStep={setStep} step={step} setSelectedFiles={setSelectedFiles} />
        {/* Step 2 */}
        <FileTransferForm setStep={setStep} step={step} setActiveTab={setActiveTab}
          activeTab={activeTab} selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} />
        {/* Step 3 */}
        <TransferSuccess step={step} setStep={setStep} type={activeTab} downloadLink={"https://be-drive.vercel.app/"} />
        {/* Step 4 */}
        <TransferFile setStep={setStep} step={step} />
        {/* Step 5 */}
        <ReceivedItem setStep={setStep} step={step} selectedFiles={selectedFiles} />
        </div>
      </div>
    </Layout>
  );
}
