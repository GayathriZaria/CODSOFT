import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Link } from 'react-router-dom'; 
import '../../assets/css/Resume.css';

import resume from '../../assets/utils/resume.pdf';
import Navbar from '../Navbar/Navbar-r';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <>
    <div>
      <Navbar/>
    </div>
      <br/><br/>
      <Link to={resume} target='_blank' download>
        Download Resume
      </Link><br/>
    <div className='res'>
      <h2 className='heading'>Resume</h2>

      <Document file={resume} >
        <Page pageNumber={pageNumber} />
      </Document>

    </div>
    </>
  );
};

export default Resume;
