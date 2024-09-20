import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import './Repodoc.css'

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        padding: 20,
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
        textAlign: 'center',
    },
    text: {
        fontSize: 12,
    },
});

// Create Document Component
const ReportDocument = ({ reportData }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.title}>Report Title</Text>
                <Text style={styles.text}>Generated Report Data:</Text>
                {reportData.map((data, index) => (
                    <Text key={index} style={styles.text}>{data}</Text>
                ))}
            </View>
        </Page>
    </Document>
);

export default ReportDocument;