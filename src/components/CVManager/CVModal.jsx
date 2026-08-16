import React, { useState, useEffect } from 'react';

export default function CVModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('preview'); // 'preview' | 'upload'
  const [cvUrl, setCvUrl] = useState(process.env.PUBLIC_URL + '/Raja_Chatterjee_CV.pdf');
  const [pinVerified, setPinVerified] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const ADMIN_PIN = '7890'; // Admin protection PIN
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');

  useEffect(() => {
    // Check if there is a custom uploaded CV saved in LocalStorage
    const savedCV = localStorage.getItem('custom_raja_cv_base64');
    const savedName = localStorage.getItem('custom_raja_cv_name');
    if (savedCV) {
      setCvUrl(savedCV);
      if (savedName) setUploadedFileName(savedName);
    }
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setUploadStatus('Please select a valid PDF file (.pdf)');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const base64Data = e.target.result;
      setCvUrl(base64Data);
      setUploadedFileName(file.name);
      localStorage.setItem('custom_raja_cv_base64', base64Data);
      localStorage.setItem('custom_raja_cv_name', file.name);
      setUploadStatus(`Successfully updated active CV to: ${file.name}`);
    };
    reader.readAsDataURL(file);
  };

  const handleResetToDefault = () => {
    localStorage.removeItem('custom_raja_cv_base64');
    localStorage.removeItem('custom_raja_cv_name');
    setCvUrl(process.env.PUBLIC_URL + '/Raja_Chatterjee_CV.pdf');
    setUploadedFileName('');
    setUploadStatus('Reset to default repository CV.');
  };

  if (!isOpen) return null;

  return (
    <div className="cv-modal-overlay" onClick={onClose}>
      <div className="cv-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cv-modal-header">
          <div className="cv-header-title">
            <span className="doc-icon">📄</span>
            <div>
              <h3>Raja Chatterjee — Curriculum Vitae</h3>
              <p>Technical Delivery Leader & Digital Builder (18+ Years Experience)</p>
            </div>
          </div>

          <div className="cv-header-actions">
            <a 
              href={cvUrl} 
              download={uploadedFileName || "Raja_Chatterjee_CV.pdf"} 
              className="cv-download-btn"
            >
              <span>↓</span> Download PDF
            </a>
            <button className="cv-close-btn" onClick={onClose}>✕</button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="cv-modal-tabs">
          <button 
            className={`tab-btn ${activeTab === 'preview' ? 'active' : ''}`}
            onClick={() => setActiveTab('preview')}
          >
            <span>👁</span> View CV Preview
          </button>
          <button 
            className="tab-btn"
            onClick={() => {
              if (!pinVerified) {
                // Prompt for PIN before switching to upload tab
                const userPin = prompt('Enter admin PIN to upload CV:');
                if (userPin === ADMIN_PIN) {
                  setPinVerified(true);
                  setActiveTab('upload');
                } else {
                  alert('Incorrect PIN. Access denied.');
                }
              } else {
                setActiveTab('upload');
              }
            }}
          >
            <span>⚙</span> Admin: Upload Latest CV
          </button>
        </div>

        {/* Tab Body */}
        <div className="cv-modal-content">
          {activeTab === 'upload' && !pinVerified ? (
            <div className="pin-prompt-container">
              <h3>Admin Access Required</h3>
              <input
                type="password"
                placeholder="Enter PIN"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                className="pin-input"
              />
              <button
                className="pin-verify-btn"
                onClick={() => {
                  if (pinInput === ADMIN_PIN) {
                    setPinVerified(true);
                  } else {
                    setUploadStatus('Incorrect PIN');
                  }
                }}
              >
                Verify PIN
              </button>
              {uploadStatus && <div className="upload-status-msg">{uploadStatus}</div>}
            </div>
          ) : (
            activeTab === 'preview' ? (
              <div className="cv-iframe-container">
                <iframe 
                  src={cvUrl} 
                  title="Raja Chatterjee CV Preview" 
                  width="100%" 
                  height="100%"
                />
              </div>
            ) : (
              <div className="cv-upload-panel">
                <div className="upload-box">
                  <div className="upload-icon">📁</div>
                  <h4>Upload New Curriculum Vitae</h4>
                  <p>Select a modern PDF document to test and update the active CV for recruiters instantly.</p>

                  <input 
                    type="file" 
                    accept="application/pdf" 
                    id="cv-file-input" 
                    onChange={handleFileUpload}
                    style={{ display: 'none' }}
                  />
                  <label htmlFor="cv-file-input" className="file-select-label">
                    Choose PDF File
                  </label>

                  {uploadedFileName && (
                    <div className="current-file-badge">
                      <span>Active File:</span> <strong>{uploadedFileName}</strong>
                    </div>
                  )}

                  {uploadStatus && (
                    <div className="upload-status-msg">{uploadStatus}</div>
                  )}
                </div>

                <div className="repo-sync-guide">
                  <h5>📌 Permanent Git Deployment Guide</h5>
                  <ol>
                    <li>Save your updated CV as <code>Raja_Chatterjee_CV.pdf</code>.</li>
                    <li>Replace the file at <code>public/Raja_Chatterjee_CV.pdf</code> in your project repository.</li>
                    <li>Commit and push to GitHub (or run <code>yarn deploy</code>) to publish for all recruiters!</li>
                  </ol>
                  {uploadedFileName && (
                    <button className="reset-default-btn" onClick={handleResetToDefault}>
                      Restore Default Repo CV
                    </button>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
