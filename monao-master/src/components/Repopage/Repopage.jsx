import { useState } from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import Repodoc from '../Repodoc/Repodoc';
import './Repopage.css'
import NavBar from '../Navbar/Navbar';

const ReportPage = () => {
    const [reportData, setReportData] = useState([
        'Data Point 1: Value 1',
        'Data Point 2: Value 2',
        'Data Point 3: Value 3',
    ]);

    return (
        <div>
            
            <PDFViewer style={{ width: '100%', height: '600px' }}>
                <Repodoc reportData={reportData} />
            </PDFViewer>
            <PDFDownloadLink
                document={<Repodoc reportData={reportData} />}
                fileName="report.pdf"
                style={{
                    textDecoration: 'none',
                    padding: '10px',
                    color: 'white',
                    backgroundColor: 'blue',
                    borderRadius: '5px',
                }}
            >
                {({ loading }) => (loading ? 'Loading document...' : 'Download Report')}
            </PDFDownloadLink>
        </div>
    );
};

export default ReportPage;