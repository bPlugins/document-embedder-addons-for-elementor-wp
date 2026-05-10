import { docEmbedderIcon, flipBookPDFViewer, powerpointEmbedderIcon, pdfjsPdfViewerIcon, sleekpdfViewerIcon, documentLibraryIcon, adobepdfViewerIcon, flip3dpdfViewer, googleSlideViewerIcon, pdfNativeEmbedderIcon, googleSheetViewerIcon, googleDocViewerIcon, excelEmbedderIcon, pdfEmbedderIcon, wordViewerIcon, excelViewerIcon, powerpointViewerIcon } from './blocksIcon';

const pluginSlug = 'document-embedder-addons-for-elementor';

const siteURL = 'https://elementor.bplugins.com';
const demoLink = `${siteURL}/demo`;
const docsURL = `https://bplugins.com/docs/document-embedder-addons-for-elementor/widget-guides/`;

export default [

    {
        name: `deafe_doc_embedder`,
        title: 'Document Embedder',
        icon: docEmbedderIcon,
        demo: `${demoLink}/google-doc-embedder/`,
        docs: `${docsURL}`,
    },
    {
        name: `deafe_excel_embedder`,
        title: 'Excel Embedder',
        icon: excelEmbedderIcon,
        demo: `${demoLink}/excel-embedder/`,
        docs: `${docsURL}`,
    },
    {
        name: `deafe_pdf_embedder`,
        title: 'PDF Embedder',
        icon: pdfEmbedderIcon,
        demo: `${demoLink}/pdf-embedder/`,
        docs: `${docsURL}`,
    },
    {
        name: `deafe_word_viewer`,
        title: 'Word Viewer',
        icon: wordViewerIcon,
        demo: `${demoLink}/word-viewer/`,
        docs: `${docsURL}`,
    },
    {
        name: `deafe_excel_viewer`,
        title: 'Excel Viewer',
        icon: excelViewerIcon,
        demo: `${demoLink}/excel-embedder/`,
        docs: `${docsURL}`,
    },
    {
        name: `deafe_pp_embedder`,
        title: 'PowerPoint Embedder',
        icon: powerpointEmbedderIcon,
        demo: `${demoLink}/powerpoint-embedder/`,
        docs: `${docsURL}`,
    },
    {
        name: `deafe_powerpoint_viewer`,
        title: 'PowerPoint Viewer',
        icon: powerpointViewerIcon,
        demo: `${demoLink}/powerpoint-viewer/`,
        docs: `${docsURL}`,
    },
    {
        name: `deafe_google_docs`,
        title: 'Google Docs Viewer',
        icon: googleDocViewerIcon,
        demo: `${demoLink}/google-doc-embedder/`,
        docs: `${docsURL}`,
    },
    {
        name: `deafe_google_sheets`,
        title: 'Google Sheets Embedder',
        icon: googleSheetViewerIcon,
        demo: `${demoLink}/google-sheet-embedder/`,
        docs: `${docsURL}`,
    },
    {
        name: `deafe_google_slides`,
        title: 'Google Slides Embedder',
        icon: googleSlideViewerIcon,
        demo: `${demoLink}/google-slides-embedder/`,
        docs: `${docsURL}`,
    },
    {
        name: `deafe_pdf_native_embedder`,
        title: 'PDF Native Embedder',
        icon: pdfNativeEmbedderIcon,
        demo: `${demoLink}/pdf-embedder/`,
        docs: `${docsURL}`,
    },
    {
        name: `deafe_sleek_pdf_viewer`,
        title: 'Sleek PDF Viewer',
        icon: sleekpdfViewerIcon,
        demo: `${demoLink}/sleek-pdf-viewer/`,
        docs: `${docsURL}`,
    },
    {
        name: `deafe_adobe_pdf_viewer`,
        title: 'Adobe PDF Viewer',
        icon: adobepdfViewerIcon,
        demo: `${demoLink}/adobe-pdf-viewer-full-window/`,
        docs: `${docsURL}`,
        isPremium: true
    },
    {
        name: `deafe_document_library`,
        title: 'Document Library',
        icon: documentLibraryIcon,
        demo: `${demoLink}/document-library/`,
        docs: `${docsURL}`,
        isPremium: true
    },
    {
        name: `deafe_pdfjs_pdf_viewer`,
        title: 'Pdf.js PDF Viewer',
        icon: pdfjsPdfViewerIcon,
        demo: `${demoLink}/pdf-js-pdf-viewer/`,
        docs: `${docsURL}`,
        isPremium: true
    },
    {
        name: `deafe_flip_book_pdf_viewer`,
        title: 'Flip Book PDF Viewer',
        icon: flipBookPDFViewer,
        demo: `${demoLink}/flip-3d-pdf-viewer/`,
        docs: `${docsURL}`,
        isPremium: true
    }
];