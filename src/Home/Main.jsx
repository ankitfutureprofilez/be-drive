import { useState } from 'react';
import Layout from '../Layout/Layout';
import { MdAdd, MdSettings, MdYoutubeSearchedFor } from 'react-icons/md';
import { Link } from 'react-router-dom';
import FileData from '../common/FileData';

export default function Main() {
  const [step, setStep] = useState(2);

  const [activeTab, setActiveTab] = useState('Link');

  const tabs = ['Link', 'Email'];

  return (

    <Layout>
      <div className="boxmodel">
        {step === 1 && (
          <div className="box flex items-center justify-center ">
            <div className="flex flex-col items-center text-center">
              <div className=' Add  rounded-[30px] p-4 mb-6'>
                <MdAdd size={48} />
              </div>
              <p className="para mt-[10px] text-center">
                Let's begin by adding some files
              </p>
              <Link to="#" className="text-black underline text-[18px] mt-2">
                Or select folder
              </Link>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="box">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="heading-md mb-1">1 Item</h2>
                <p className="para">115.3 KB out of 100 GB</p>
              </div>
              <div className="Add rounded-[5px] flex items-center justify-center">
                <MdAdd size={24} />
              </div>
            </div>

            <div className="flex space-x-8 border-b-2 border-[#0000001F] mt-1">

              {/* Link Tab */}
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setActiveTab('Link')}
              >
                <span
                  className={`text-lg font-medium transition-colors duration-200 ${activeTab === 'Link' ? 'text-green-500' : 'text-gray-500'
                    }`}
                >
                  Link
                </span>
                <div
                  className={`mt-1 h-0.5 transition-all duration-200 ${activeTab === 'Link' ? 'bg-green-500 w-full' : 'w-full'
                    }`}
                ></div>
              </div>

              {/* Email Tab */}
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setActiveTab('Email')}
              >
                <span
                  className={`text-lg font-medium transition-colors duration-200 ${activeTab === 'Email' ? 'text-green-500' : 'text-gray-500'
                    }`}
                >
                  Email
                </span>
                <div
                  className={`mt-1 h-0.5 transition-all duration-200 ${activeTab === 'Email' ? 'bg-green-500 w-full' : 'w-full'
                    }`}
                ></div>
              </div>

            </div>
            <FileData />

            <input
              type="text"
              placeholder="Title"
              className="input"
            />
            <textarea
            rows={5}
              placeholder="Message"
              className="border-[#646A73] border rounded-[15px] p-2 w-full  resize-none"
            />

            <div className='flex justify-between items-center text-center mt-1'>
              <div className="flex items-center space-x-3 p-2">
                <MdSettings className="text-black text-xl" />
                <div>
                  <h6 className="heading">
                    Expire on 2/6/2025
                  </h6>
                  <p className="para">
                    No password added
                  </p>
                </div>
              </div>

              <button className="button-sm  md:button-md lg:button-lg ">
                Create Invoice
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
