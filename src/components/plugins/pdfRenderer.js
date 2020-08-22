import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
 
function MyApp() {
  const [numPages, setNumPages, cv] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
 
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  };
  
  componentDidMount() {
		const db = firebase.firestore();
		db
			.collection('cv')
			.orderBy('created', 'desc')
			.get()
			.then((snapshot) => {
				const cv = [];
				snapshot.forEach((doc) => {
					const data = doc.data();
					cv.push(data);
				});
				this.setState({ cv: cv });
			})
			.catch((error) => console.log(error));
	}
 
  return (
    <div>
      <Document
        file={cv[resume].image}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}