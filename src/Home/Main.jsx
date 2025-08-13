import { useState } from 'react';
import Layout from '../Layout/Layout';
import { MdAdd} from 'react-icons/md';
import { Link } from 'react-router-dom';
import FileTransferForm from './FileTransferForm';
import TransferFile from './TransferFile';
import ReceivedItem from './ReceivedItem';
import TransferSuccess from './TransferSuccess';
export default function Main() {
  const [step, setStep] = useState(2);
  const [activeTab, setActiveTab] = useState('Link');

  return (
    <Layout>
      <div className="boxmodel">
        {step === 1 && (
          <div className="box flex items-center justify-center !h-[576px]">
            <div className="manage-col">
              <div className='Add rounded-[35px] p-6 mb-6'>
                <MdAdd size={56} />
              </div>
              <p className="para mt-[10px] text-center">
                Let's begin by adding some files
              </p>
              <Link to="#" onClick={() => { setStep(2) }} className="transefer mt-1">
                Or select folder
              </Link>
            </div>
          </div>
        )}
        <FileTransferForm setStep={setStep} step={step} setActiveTab={setActiveTab} activeTab={activeTab} />
        <TransferSuccess step={step} setStep={setStep} type={activeTab} downloadLink={"https://be-drive.vercel.app/"}/>
        <TransferFile setStep={setStep} step={step} />
        <ReceivedItem setStep={setStep} step={step} />
      </div>
    </Layout>
  );
}
