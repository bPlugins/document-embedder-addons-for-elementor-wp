const slug = 'document-embedder-addons-for-elementor';

export const dashboardInfo = (info) => {
	const { version, isPremium, hasPro, pricingUrl, licenseActiveNonce, none, action, adminUrl = '' } = info;

	const proSuffix = isPremium ? ' Pro' : '';

	return {
		name: `Document Embedder Addon${proSuffix}`,
		displayName: `Document Embedder Addon${proSuffix} - Easily Embed Word, Excel, PowerPoint, PDF, and Google Docs.`,
		description: 'Document Embedder Addon for Elementor is a collection of 16 document display widgets designed for use with the Elementor page builder. It allows users to embed files such as PDFs, Word documents, Excel sheets, PowerPoint presentations, and Google Docs directly into WordPress pages with adjustable layout controls.',
		slug,
		media: {
			logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
			banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
			thumbnail: `https://bplugins.com/wp-content/uploads/2025/09/document-embedder.png`,
			// thumbnail:'https://ps.w.org/document-embedder-addons-for-elementor/assets/icon.svg?rev=3623267',
			video: 'https://www.youtube.com/watch?v=OtJayJ8N-5c',
			isYoutube: true
		},
		licenseActiveNonce,
		none,
		action,
		version,
		isPremium,
		hasPro,
		pricingUrl,
		adminUrl,
		displayOurPlugins: true,
		pages: {
			org: `https://wordpress.org/plugins/${slug}/`,
			landing: `https://bplugins.com/products/${slug}/`, //Learn More button aer jonno
			docs: `https://bplugins.com/docs/${slug}/`,
			pricing: `https://bplugins.com/products/${slug}/pricing`,
		},
		freemius: {
			product_id: 20539,
			plan_id: 34159,
			public_key: 'pk_266740f98755c34bcd6cf52c052f8',
		},
		proFeatures: [
			'Adobe PDF Viewer: A reliable, feature-rich PDF viewer powered by Adobe’s PDF engine.',
			'Document Library: Organize and manage all your embedded documents in one centralized location with easy access and quick reusable upload',
			'Pdf.js PDF Viewer: Display your PDF in premium look with the pdf.js library',
			'Search functionality within Adobe PDF embedded documents.',
			'Allow users to highlight and annotate documents.',
			'Add watermarks to embedded documents for branding and security.',
			'Add content protection features to prevent unauthorized downloading or copying of embedded documents.',
			'Centralized hub to organize and manage all your embedded documents.',
			'Lightbox display option for a more immersive viewing experience.',
			'Priority support for any issues or questions related to the plugin.'
		],
		startButton: {
			label: 'Start Editing Now',
			url: `${adminUrl}post-new.php?post_type=page`
		}
	}
}

export const welcomeInfo = (adminUrl) => ({
	keywords: [
		'PDF Embedder',
		'Word Viewer',
		'Excel Embedder',
		'PowerPoint Viewer',
		'Document Library',
		'Flip Book'
	],
	keywordsLabel: 'Widgets',
	gettingStarted: {
		tabs: [
			{
				key: 'elementor',
				label: 'Elementor',
				icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>,
				steps: [
					{
						num: 1,
						title: 'Create or Edit a Page',
						body: 'Go to <strong>Pages › Add New</strong> and click <strong>Edit with Elementor</strong>.',
						link: {
							url: `${adminUrl}post-new.php?post_type=page`,
							label: 'Create New Page'
						}
					},
					{
						num: 2,
						title: 'Search for All Embed Widgets',
						body: 'In the Elementor panel, search for "PDF Embedder", "Adobe PDF Embedder", "Google Docs Viewer", etc.'
					},
					{
						num: 3,
						title: 'Drag and Drop',
						body: 'Drag the widget onto your section and enter the media URL in the content settings.'
					}
				]
			}
		]
	},
	changelogs: [
		{
			version: '1.2.2 06-Aug-26',
			type: 'update',
			list: [
				'<strong>New:</strong> Add new Widget Modern Document Library.',
				'<strong>New:</strong> Add Timeline Document View.',
				'<strong>New:</strong> Add Duo-Tone Document View.',
				'<strong>New:</strong> Add Premium Grid Document View.',
			]
		},
		{
			version: '1.2.1 12-July-26',
			type: 'update',
			list: [
				'<strong>Update:</strong> Add new version of Freemius SDK 2.13.4',
				'<strong>Update:</strong> Add new Admin Dashboard.',
			]
		},
		{
			version: '1.2.0 27-June-26',
			type: 'update',
			list: [
				'<strong>Update:</strong> Add new version of Freemius SDK.',
				'<strong>Update:</strong> Released version 1.2.0.',
			]
		},
		{
			version: '1.1.10 18-June-26',
			type: 'fix',
			list: [
				'<strong>Fix:</strong> Resolved all widgets missing issue.',
				'<strong>Fix:</strong> Released version 1.1.10.',
			]
		},
		{
			version: '1.1.9 22-May-26',
			type: 'update',
			list: [
				'<strong>Update:</strong> Cleaned up core file call.',
				'<strong>Update:</strong> Add the dependency plugin.',
				'<strong>Fix:</strong> Resolved all plugin check issues.',
				'<strong>Update:</strong> Released version 1.1.9.',
			]
		},
		{
			version: '1.1.8 11-May-26',
			type: 'update',
			list: [
				'<strong>Update:</strong> Cleaned up the codebase and removed unused dependencies.',
				'<strong>Improvement:</strong> Improved the presentation of premium-only settings with intuitive notice cards.',
				'<strong>Improvement:</strong> Refactored the codebase, including improvements to prefixes, text domains, nonce validation, escaping, and overall coding standards.',
				'<strong>Fix:</strong> Resolved all plugin check issues.',
			]
		},
		{
			version: '1.1.7 18-Apr-26',
			type: 'fix',
			list: [
				'<strong>Fix:</strong> Fixed: PHP Fatal error on elementor editor',
			]
		},
		{
			version: '1.1.6 10-Mar-26',
			type: 'new',
			list: [
				'<strong>New:</strong> Release: New Widget( Flip Book PDF Viewer)',
			]
		},
		{
			version: '1.1.5 03-Mar-26',
			type: 'update',
			list: [
				'<strong>Update:</strong> Update: Add new admin dashboard',
			]
		},
		{
			version: '1.1.4 22-Feb-26',
			type: 'new',
			list: [
				'<strong>New:</strong> Release: New Widget( Pdf.js PDF Viewer)',
				'<strong>Fix:</strong> Fixed: Refactor code',
			]
		},
		{
			version: '1.1.3 26-Jan-26',
			type: 'new',
			list: [
				'<strong>New:</strong> Release: New Widget( Document Library)',
				'<strong>Update:</strong> Update: New Features Show/Hide Preview Button',
				'<strong>Update:</strong> Update: New Features Show/Hide Download Button',
			]
		},
		{
			version: '1.1.2 05-Jan-26',
			type: 'fix',
			list: [
				'<strong>Fix:</strong> Fixed: Dashboard JS Error',
			]
		},
		{
			version: '1.1.1 03-Jan-26',
			type: 'new',
			list: [
				'<strong>New:</strong> Release: New Widget( Adobe PDF Viewer)',
				'<strong>New:</strong> Release: Full Window Adobe PDF Viewer',
				'<strong>New:</strong> Release: Sided Container Adobe PDF Viewer',
				'<strong>New:</strong> Release: In-Line Adobe PDF Viewer',
				'<strong>New:</strong> Release: Lightbox Adobe PDF Viewer',
			]
		},
		{
			version: '1.1.0 26-Nov-25',
			type: 'fix',
			list: [
				'<strong>Fix:</strong> Fixed: Sleek PDF Viewer Style Control Issue Fix ',
			]
		},
		{
			version: '1.0.5 12-Nov-25',
			list: [
				'<strong>Fix:</strong> Fixed: PHP Warning',
			]
		},
		{
			version: '1.0.4',
			list: [
				'<strong>Fix:</strong> Fixed: Security issue',
			]
		},
		{
			version: '1.0.3',
			list: [
				'<strong>Improvement:</strong> Reduce assets load',
			]
		},
		{
			version: '1.0.2',
			list: [
				'<strong>New:</strong> Add translate feature',
			]
		},
		{
			version: '1.0.0',
			list: [
				'<strong>New:</strong> First release',
			]
		}
	],
	changelogsLimit: 4,
	changelogsReadMoreLabel: 'View More Changelogs',
	proFeatures: [
		'Adobe PDF Viewer: A reliable, feature-rich PDF viewer powered by Adobe’s PDF engine.',
		'Document Library: Organize and manage all your embedded documents in one centralized location with easy access and quick reusable upload',
		'Pdf.js PDF Viewer: Display your PDF in premium look with the pdf.js library',
		'Search functionality within Adobe PDF embedded documents.',
		'Allow users to highlight and annotate documents.',
		'Add watermarks to embedded documents for branding and security.',
		'Add content protection features to prevent unauthorized downloading or copying of embedded documents.',
		'Centralized hub to organize and manage all your embedded documents.',
		'Lightbox display option for a more immersive viewing experience.',
		'Priority support for any issues or questions related to the plugin.'
	]
});

export const demoInfo = {
	title: 'Live Overview',
	description: 'Click on any style to view it live',
	allInOneLabel: 'See All Demo',
	allInOneLink: 'https://bplugins.com/products/document-embedder-addons-for-elementor/#demos',
	demos: [
		{
			icon: '<svg width="800px" height="800px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="File" transform="translate(-96.000000, -96.000000)" fill-rule="nonzero"><g id="doc_line" transform="translate(96.000000, 96.000000)"><path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"></path><path d="M13.5858,2 C14.1162,2 14.6249,2.21071 15,2.58579 L19.4142,7 C19.7893,7.37507 20,7.88378 20,8.41421 L20,20 C20,21.1046 19.1046,22 18,22 L6,22 C4.89543,22 4,21.1046 4,20 L4,4 C4,2.89543 4.89543,2 6,2 L13.5858,2 Z M12,4 L6,4 L6,20 L18,20 L18,10 L13.5,10 C12.7203294,10 12.0795543,9.40511446 12.0068668,8.64446046 L12,8.5 L12,4 Z M14.0637,12.6489 C14.2576,12.1318 14.834,11.8698 15.3511,12.0637 C15.8312643,12.24375 16.0914699,12.7536087 15.9709451,13.2395462 L15.9363,13.3511 L14.53,17.1014 C14.1886174,18.0117217 12.9420907,18.0513009 12.522,17.2201376 L12.47,17.1014 L12,15.848 L11.53,17.1014 C11.1886174,18.0117217 9.94210904,18.0513009 9.52203734,17.2201376 L9.47004,17.1014 L8.06367,13.3511 C7.86975,12.834 8.13176,12.2576 8.64888,12.0637 C9.12906286,11.88365 9.66036821,12.0966974 9.88908227,12.5420706 L9.93633,12.6489 L10.5,14.152 L10.97,12.8986 C11.3113826,11.9882783 12.5579093,11.9486991 12.978,12.7798624 L13.03,12.8986 L13.5,14.152 L14.0637,12.6489 Z M14,4.41421 L14,8 L17.5858,8 L14,4.41421 Z" id="形状" fill="#09244B"></path></g></g></g></svg>',
			title: 'Google Doc Viewer',
			description: 'View word file using google doc',
			category: 'Viewer',
			type: 'iframe',
			url: 'https://elementor.bplugins.com/demo/google-doc-embedder/'
		},
		{
			icon: '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12.1333C2 8.58633 2 6.81283 2.69029 5.45806C3.29749 4.26637 4.26637 3.29749 5.45806 2.69029C6.81283 2 8.58633 2 12.1333 2H19.8667C23.4137 2 25.1872 2 26.5419 2.69029C27.7336 3.29749 28.7025 4.26637 29.3097 5.45806C30 6.81283 30 8.58633 30 12.1333V19.8667C30 23.4137 30 25.1872 29.3097 26.5419C28.7025 27.7336 27.7336 28.7025 26.5419 29.3097C25.1872 30 23.4137 30 19.8667 30H12.1333C8.58633 30 6.81283 30 5.45806 29.3097C4.26637 28.7025 3.29749 27.7336 2.69029 26.5419C2 25.1872 2 23.4137 2 19.8667V12.1333Z" fill="#B30B00"></path> <path d="M24.0401 17.8976C22.7327 16.464 19.1701 17.0912 18.3094 17.1808C17.0891 15.9264 16.2284 14.504 15.8798 13.9664C16.3156 12.6224 16.6642 11.1104 16.6642 9.6768C16.6642 8.3328 16.1413 7 14.7576 7C14.2347 7 13.7989 7.2688 13.5374 7.7168C12.9273 8.792 13.1887 10.9312 14.1475 13.16C13.6245 14.7728 12.753 17.1808 11.7179 19.0512C10.3234 19.5888 7.28369 21.0112 7.02221 22.624C6.93505 23.072 7.10937 23.6096 7.45801 23.8784C7.80665 24.2368 8.24244 24.3264 8.67824 24.3264C10.4977 24.3264 12.328 21.7392 13.6354 19.4096C14.6814 19.0512 16.3265 18.5136 17.9825 18.2448C19.8891 20.0368 21.6323 20.2944 22.5039 20.2944C23.7242 20.2944 24.16 19.7568 24.3234 19.3088C24.5522 18.8832 24.3887 18.256 24.0401 17.8976ZM22.8199 18.7936C22.7327 19.152 22.2969 19.5104 21.5125 19.3312C20.5537 19.0624 19.693 18.6144 18.9958 17.9872C19.6059 17.8976 21.0767 17.7184 22.1226 17.8976C22.4712 17.9872 22.907 18.256 22.8199 18.7936ZM14.3872 8.0752C14.4744 7.896 14.6487 7.8064 14.823 7.8064C15.2588 7.8064 15.3459 8.344 15.3459 8.792C15.2588 9.8672 15.0845 11.0208 14.7358 12.0064C14.0386 10.0464 14.1257 8.6128 14.3872 8.0752ZM14.3 18.1664C14.7358 17.36 15.2588 15.848 15.4331 15.3104C15.8689 16.1168 16.6533 17.0128 17.002 17.4496C17.0891 17.3712 15.5203 17.7184 14.3 18.1664ZM11.3475 20.2272C10.1382 22.1872 9.00509 23.4416 8.30781 23.4416C8.22065 23.4416 8.04634 23.4416 7.95918 23.352C7.87202 23.1728 7.78486 22.9936 7.87202 22.8144C7.95918 22.0976 9.35373 21.112 11.3475 20.2272Z" fill="white"></path> </g></svg>',
			title: 'Adobe PDF Viewer',
			children: [
				{
					title: 'Full Window',
					type: 'iframe',
					url: 'https://elementor.bplugins.com/demo/adobe-pdf-viewer-full-window/'
				},
				{
					title: 'Sized Container',
					type: 'iframe',
					url: 'https://elementor.bplugins.com/demo/adobe-pdf-viewer-sized-container/'
				},
				{
					title: 'In Line',
					type: 'iframe',
					url: 'https://elementor.bplugins.com/demo/adobe-pdf-viewer-in-line/'
				},
				{
					title: 'Lightbox',
					type: 'iframe',
					url: 'https://elementor.bplugins.com/demo/adobe-pdf-viewer-lightbox/'
				}
			]
		},
		{
			icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="#292D32"></path> <path d="M11.4991 8.09V17.25C11.4991 17.61 11.1391 17.85 10.8091 17.71C9.59914 17.19 8.01913 16.71 6.91913 16.57L6.72913 16.55C6.11913 16.47 5.61914 15.28V7.57999C5.61914 6.81999 6.23915 6.25 6.99915 6.31C8.24915 6.41 10.0992 7.01001 11.2592 7.67001C11.4092 7.74001 11.4991 7.91 11.4991 8.09Z" fill="#292D32"></path> <path d="M18.38 7.69983V15.2698C18.38 15.8898 17.88 16.4598 17.27 16.5398L17.06 16.5598C15.97 16.7098 14.4 17.1798 13.19 17.6898C12.86 17.8298 12.5 17.5898 12.5 17.2298V8.0798C12.5 7.8998 12.59 7.72983 12.75 7.63983C13.91 6.98983 15.72 6.4098 16.95 6.2998H16.99C17.76 6.3098 18.38 6.92983 18.38 7.69983Z" fill="#292D32"></path> </g></svg>',
			title: 'Flip Book PDF Viewer',
			children: [
				{
					title: 'Default',
					type: 'iframe',
					url: 'https://elementor.bplugins.com/demo/flip-book-pdf-viewer-default/'
				},
				{
					title: 'Thumbnail',
					type: 'iframe',
					url: 'https://elementor.bplugins.com/demo/flip-book-pdf-viewer-thumbnail/'
				},
				{
					title: 'Lightbox',
					type: 'iframe',
					url: 'https://elementor.bplugins.com/demo/flip-book-pdf-viewer-lightbox/'
				}
			]
		},
		{
			icon: '<svg width="800px" height="800px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1"><path style="fill:#ffffff;stroke:none;" d="m 65,3 0,19 19,0 z"/><path style="fill:#EBEBDA;stroke:#777777;stroke-width:2;" d="m 65,3 0,19 19,0 0,74 -72,0 0,-93 53,0 19,19"/><path style="fill:none;stroke:#C01A1A;stroke-width:4;" d="m 49,56 c -17,4 -27,10 -29,14 -2,4 -1,9 6,4 7,-5 20,-32 23,-53 1,-7 -7,-11 -7,-2 0,12 6,34 30,41 9,2 10,-7 0,-7 -10,0 -23,3 -23,3 z"/></svg>',
			title: 'Native PDF Viewer',
			description: 'Pdf Viewer using Native Browser',
			category: 'Viewer',
			type: 'iframe',
			url: 'https://elementor.bplugins.com/demo/pdf-embedder/'
		},
		{
			icon: '<svg width="800px" height="800px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M4 8H44" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 8H40V34H8L8 8Z" fill="#2F88FF" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 16L27 21L22 26" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 42L24 34L32 42" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
			title: 'PowerPoint Viewer',
			description: 'PowerPoint Viewer to show presentation',
			category: 'Viewer',
			type: 'iframe',
			url: 'https://elementor.bplugins.com/demo/powerpoint-viewer/'
		},
		{
			icon: '<svg width="800px" height="800px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 15V6C8 4.89543 8.89543 4 10 4H38C39.1046 4 40 4.89543 40 6V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V33" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M31 15H34" stroke="#000000" stroke-width="4" stroke-linecap="round"/><path d="M28 23H34" stroke="#000000" stroke-width="4" stroke-linecap="round"/><path d="M28 31H34" stroke="#000000" stroke-width="4" stroke-linecap="round"/><rect x="4" y="15" width="18" height="18" fill="#2F88FF" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 21L16 27" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 21L10 27" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
			title: 'Excel Viewer',
			description: 'Excel Viewer to show spreedsheet',
			category: 'Viewer',
			type: 'iframe',
			url: 'https://elementor.bplugins.com/demo/excel-embedder/'
		},
		{
			icon: '<svg fill="#000000" height="800px" width="800px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ="0 0 32 32" xml:space="preserve"><path d="M29,2H3C1.3,2,0,3.3,0,5v16c0,1.7,1.3,3,3,3h26c1.7,0,3-1.3,3-3V5C32,3.3,30.7,2,29,2z M7.7,14.3c0.4,0.4,0.4,1,0,1.4C7.5,15.9,7.3,16,7,16s-0.5-0.1-0.7-0.3l-2-2c-0.4-0.4-0.4-1,0-1.4l2-2c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L6.4,13L7.7,14.3zM27.7,13.7l-2,2C25.5,15.9,25.3,16,25,16s-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.3-1.3l-1.3-1.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l2,2C28.1,12.7,28.1,13.3,27.7,13.7z"/><circle cx="16" cy="28" r="2"/><circle cx="10" cy="28" r="2"/><circle cx="22" cy="28" r="2"/></svg>',
			title: 'Google Slides Viewer',
			description: 'Google Slides Viewer to show presentation',
			category: 'Viewer',
			type: 'iframe',
			url: 'https://elementor.bplugins.com/demo/google-slides-embedder/'
		},
		{
			icon: '<svg width="800px" height="800px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6.5V6H2V6.5H2.5ZM6.5 6.5V6H6V6.5H6.5ZM6.5 10.5H6V11H6.5V10.5ZM13.5 3.5H14V3.29289L13.8536 3.14645L13.5 3.5ZM10.5 0.5L10.8536 0.146447L10.7071 0H10.5V0.5ZM2.5 7H3.5V6H2.5V7ZM3 11V8.5H2V11H3ZM3 8.5V6.5H2V8.5H3ZM3.5 8H2.5V9H3.5V8ZM4 7.5C4 7.77614 3.77614 8 3.5 8V9C4.32843 9 5 8.32843 5 7.5H4ZM3.5 7C3.77614 7 4 7.22386 4 7.5H5C5 6.67157 4.32843 6 3.5 6V7ZM6 6.5V10.5H7V6.5H6ZM6.5 11H7.5V10H6.5V11ZM9 9.5V7.5H8V9.5H9ZM7.5 6H6.5V7H7.5V6ZM9 7.5C9 6.67157 8.32843 6 7.5 6V7C7.77614 7 8 7.22386 8 7.5H9ZM7.5 11C8.32843 11 9 10.3284 9 9.5H8C8 9.77614 7.77614 10 7.5 10V11ZM10 6V11H11V6H10ZM10.5 7H13V6H10.5V7ZM10.5 9H12V8H10.5V9ZM2 5V1.5H1V5H2ZM13 3.5V5H14V3.5H13ZM2.5 1H10.5V0H2.5V1ZM10.1464 0.853553L13.1464 3.85355L13.8536 3.14645L10.8536 0.146447L10.1464 0.853553ZM2 1.5C2 1.22386 2.22386 1 2.5 1V0C1.67157 0 1 0.671573 1 1.5H2ZM1 12V13.5H2V12H1ZM2.5 15H12.5V14H2.5V15ZM14 13.5V12H13V13.5H14ZM12.5 15C13.3284 15 14 14.3284 14 13.5H13C13 13.7761 12.7761 14 12.5 14V15ZM1 13.5C1 14.3284 1.67157 15 2.5 15V14C2.22386 14 2 13.7761 2 13.5H1Z" fill="#000000"/></svg>',
			title: 'Sleek PDF Viewer',
			description: 'Pdf Viewer using PDFPress',
			category: 'Viewer',
			type: 'iframe',
			url: 'https://elementor.bplugins.com/demo/sleek-pdf-viewer/'
		},
		{
			icon: '<svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M15.15 18.379h-4.247v2.38h4.25v-2.38zM22.797 12.601h-13.596v9.857h13.597v-9.858zM26.876 9.145v19.771c0 0 0 0 0 0.001 0 1.126-0.913 2.038-2.038 2.038-0 0-0.001 0-0.001 0h-17.675c0 0 0 0-0 0-1.126 0-2.039-0.913-2.039-2.039 0 0 0 0 0-0v0-25.833c0-0 0-0 0-0.001 0-1.126 0.913-2.038 2.038-2.038 0 0 0.001 0 0.001 0h11.613v8.101zM21.099 18.379h-4.25v2.38h4.25zM21.099 14.3h-4.25v2.38h4.25zM19.4 1.045v7.478h7.478zM15.15 16.679h-4.247v-2.379h4.25v2.38z"></path></svg>',
			title: 'Google Sheet Viewer',
			description: 'Google Sheet Viewer to show spreedsheet',
			category: 'Viewer',
			type: 'iframe',
			url: 'https://elementor.bplugins.com/demo/google-sheet-embedder/'
		},
		{
			icon: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#ECEDEF;" d="M106.324,8.017c-9.446,0-17.102,7.656-17.102,17.102v461.762c0,9.446,7.656,17.102,17.102,17.102 h376.251c9.446,0,17.102-7.656,17.102-17.102V84.977l-76.96-76.96H106.324z"></path> <path style="fill:#D9DCDF;" d="M439.819,84.977h59.858l-76.96-76.96v59.858C422.716,77.319,430.373,84.977,439.819,84.977z"></path> <path style="fill:#C6CACF;" d="M397.063,196.142H89.222V42.221h307.841c4.722,0,8.551,3.829,8.551,8.551v136.818 C405.614,192.313,401.785,196.142,397.063,196.142z"></path> <polygon style="fill:#68727E;" points="388.512,179.04 12.261,179.04 80.67,110.63 12.261,42.221 388.512,42.221 "></polygon> <path style="fill:#D9DCDF;" d="M414.165,461.228H174.733c-4.722,0-8.551-3.829-8.551-8.551v-222.33c0-4.722,3.829-8.551,8.551-8.551 h239.432c4.722,0,8.551,3.829,8.551,8.551v222.33C422.716,457.399,418.888,461.228,414.165,461.228z"></path> <path style="fill:#C6CACF;" d="M183.284,444.125v-222.33h-8.551c-4.722,0-8.551,3.829-8.551,8.551v222.33 c0,4.722,3.829,8.551,8.551,8.551h239.432c4.722,0,8.551-3.829,8.551-8.551v-8.551H183.284z"></path> <rect x="302.999" y="324.409" style="fill:#DB6B5E;" width="85.511" height="102.614"></rect> <rect x="320.101" y="341.511" style="fill:#FF8C78;" width="51.307" height="68.409"></rect> <path d="M499.677,426.489c4.428,0,8.017-3.589,8.017-8.017V84.977c0-2.1-0.862-4.183-2.347-5.668l-76.96-76.96 C426.9,0.863,424.817,0,422.716,0H106.324C92.473,0,81.205,11.268,81.205,25.119v9.086H12.261c-6.987,0-10.616,8.738-5.668,13.685 l62.74,62.741l-62.74,62.741c-4.947,4.947-1.32,13.685,5.668,13.685h68.944v299.825c0,13.851,11.268,25.119,25.119,25.119h376.251 c13.851,0,25.119-11.268,25.119-25.119v-34.205c0-4.427-3.588-8.017-8.017-8.017c-4.428,0-8.017,3.589-8.017,8.017v34.205 c0,5.01-4.076,9.086-9.086,9.086H106.324c-5.01,0-9.086-4.076-9.086-9.086V187.056h51.841c4.427,0,8.017-3.589,8.017-8.017 s-3.589-8.017-8.017-8.017H31.615l54.724-54.724c3.131-3.131,3.131-8.207,0-11.337L31.615,50.238h348.88v120.785H183.284 c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h205.228c4.428,0,8.017-3.589,8.017-8.017V42.221 c0-4.427-3.588-8.017-8.017-8.017H97.238v-9.086c0-5.01,4.076-9.086,9.086-9.086H414.7v51.841c0,13.851,11.268,25.119,25.119,25.119 h51.841v325.478C491.66,422.9,495.248,426.489,499.677,426.489z M439.819,76.96c-5.01,0-9.086-4.076-9.086-9.086V27.37l49.589,49.59 H439.819z"></path> <path d="M182.75,136.284v-17.655c0.177,0.012,0.355,0.018,0.534,0.018h25.653c4.427,0,8.017-3.589,8.017-8.017V84.977 c0-4.427-3.589-8.017-8.017-8.017h-34.205c-4.427,0-8.017,3.589-8.017,8.017v51.307c0,4.427,3.589,8.017,8.017,8.017 S182.75,140.711,182.75,136.284z M182.75,92.994h18.171v9.62h-17.637c-0.18,0-0.357,0.005-0.534,0.018V92.994z"></path> <path d="M268.796,144.301c4.428,0,8.017-3.589,8.017-8.017v-34.205c0-13.851-11.268-25.119-25.119-25.119h-17.102 c-4.427,0-8.017,3.589-8.017,8.017v51.307c0,4.427,3.589,8.017,8.017,8.017H268.796z M242.608,92.994h9.086 c5.01,0,9.086,4.076,9.086,9.086v26.188h-18.171V92.994z"></path> <path d="M328.654,92.994c4.428,0,8.017-3.589,8.017-8.017c0-4.427-3.588-8.017-8.017-8.017h-34.205 c-4.428,0-8.017,3.589-8.017,8.017v51.307c0,4.427,3.588,8.017,8.017,8.017s8.017-3.589,8.017-8.017v-17.637h17.637 c4.428,0,8.017-3.589,8.017-8.017c0-4.427-3.588-8.017-8.017-8.017h-17.637v-9.62H328.654z"></path> <path d="M158.165,230.347v222.33c0,9.136,7.432,16.568,16.568,16.568h239.432c9.136,0,16.568-7.432,16.568-16.568v-222.33 c0-9.136-7.432-16.568-16.568-16.568H174.733C165.597,213.779,158.165,221.211,158.165,230.347z M174.199,230.347 c0-0.295,0.239-0.534,0.534-0.534h239.432c0.294,0,0.534,0.239,0.534,0.534v222.33c0,0.295-0.241,0.534-0.534,0.534H174.733 c-0.295,0-0.534-0.239-0.534-0.534L174.199,230.347L174.199,230.347z"></path> <path d="M303,435.04h85.511c4.428,0,8.017-3.589,8.017-8.017V324.409c0-4.427-3.588-8.017-8.017-8.017H303 c-4.428,0-8.017,3.589-8.017,8.017v102.614C294.984,431.45,298.572,435.04,303,435.04z M311.017,332.426h69.478v86.58h-69.478 V332.426z"></path> <path d="M303,264.017h94.063c4.428,0,8.017-3.589,8.017-8.017c0-4.427-3.588-8.017-8.017-8.017H303 c-4.428,0-8.017,3.589-8.017,8.017C294.984,260.427,298.572,264.017,303,264.017z"></path> <path d="M303,298.221h94.063c4.428,0,8.017-3.589,8.017-8.017c0-4.427-3.588-8.017-8.017-8.017H303 c-4.428,0-8.017,3.589-8.017,8.017C294.984,294.632,298.572,298.221,303,298.221z"></path> <path d="M191.835,264.017h85.512c4.428,0,8.017-3.589,8.017-8.017c0-4.427-3.588-8.017-8.017-8.017h-85.511 c-4.427,0-8.017,3.589-8.017,8.017C183.819,260.427,187.408,264.017,191.835,264.017z"></path> <path d="M191.835,298.221h85.512c4.428,0,8.017-3.589,8.017-8.017c0-4.427-3.588-8.017-8.017-8.017h-85.511 c-4.427,0-8.017,3.589-8.017,8.017C183.819,294.632,187.408,298.221,191.835,298.221z"></path> <path d="M191.835,332.426h85.512c4.428,0,8.017-3.589,8.017-8.017c0-4.427-3.588-8.017-8.017-8.017h-85.511 c-4.427,0-8.017,3.589-8.017,8.017C183.819,328.837,187.408,332.426,191.835,332.426z"></path> <path d="M191.835,366.63h85.512c4.428,0,8.017-3.589,8.017-8.017c0-4.427-3.588-8.017-8.017-8.017h-85.511 c-4.427,0-8.017,3.589-8.017,8.017C183.819,363.041,187.408,366.63,191.835,366.63z"></path> <path d="M191.835,400.835h85.512c4.428,0,8.017-3.589,8.017-8.017c0-4.427-3.588-8.017-8.017-8.017h-85.511 c-4.427,0-8.017,3.589-8.017,8.017C183.819,397.246,187.408,400.835,191.835,400.835z"></path> <path d="M191.835,435.04h85.512c4.428,0,8.017-3.589,8.017-8.017c0-4.427-3.588-8.017-8.017-8.017h-85.511 c-4.427,0-8.017,3.589-8.017,8.017C183.819,431.45,187.408,435.04,191.835,435.04z"></path> </g></svg>',
			title: 'pdf.js PDF Viewer',
			description: 'Pdf Viewer',
			category: 'Viewer',
			type: 'iframe',
			url: 'https://elementor.bplugins.com/demo/pdf-js-pdf-viewer/'
		},
		{
			icon: ' <svg width="800px" height="800px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M136.436736 593.825792V461.78304c0-75.42272 61.090816-136.281088 136.649728-135.927808l469.368832-0.002048c75.469824 0.352256 139.720704 64.029696 142.649344 139.280384 0 0 2.291712 5.917696 2.397184 128.6912 0.104448 122.773504 0.045056 158.030848 0.045056 158.030848-0.0256 75.474944-61.190144 136.659968-136.493056 136.659968H272.884736c-75.358208 0-136.448-61.198336-136.448-136.612864V593.825792z" fill="#FFF200" /><path d="M258.899968 887.808c-68.788224-7.016448-122.463232-65.215488-122.463232-135.90528V461.78304c0-75.201536 60.744704-135.928832 135.996416-135.928832l0.653312 0.001024 469.368832 2.189312c75.469824 0.352256 139.720704 61.83936 142.649344 137.090048 0 0 2.291712 5.916672 2.397184 128.6912 0.104448 122.773504 0.045056 158.029824 0.045056 158.029824C887.523328 822.603776 833.78176 880.7936 765.0304 887.808H258.899968z m-24.66304-751.616h34.869248c43.022336 0 64.384 16.259072 91.429888 36.84352 29.256704 22.268928 65.668096 49.982464 127.637504 49.982464h301.5424c54.088704 0 98.092032 43.933696 98.092032 97.93536v39.656448a187.64288 187.64288 0 0 0-18.945024-21.154816c-16.712704-16.039936-35.934208-28.676096-57.132032-37.558272-22.088704-9.253888-45.33248-14.0032-69.087232-14.113792L273.273856 285.5936l-0.840704-0.002048c-23.80288 0-46.8992 4.653056-68.64896 13.831168-21.010432 8.864768-39.862272 21.556224-56.032256 37.71904A177.8688 177.8688 0 0 0 136.192 349.87008V234.10688c0-53.9904 43.982848-97.91488 98.044928-97.91488z m555.47904 45.865984H488.173568C389.128192 182.057984 379.7248 95.232 269.106176 95.232h-34.869248C157.58848 95.232 95.232 157.40928 95.232 234.10688v555.61216C95.232 866.41664 157.485056 928.768 234.277888 928.768h37.630976c0.324608 0 0.649216 0.011264 0.974848 0.011264h478.170112c0.325632 0 0.65024-0.01024 0.975872-0.012288h37.692416C866.458624 928.768 928.768 866.63168 928.768 789.98528V320.953344c0-76.619776-62.255104-138.89536-139.052032-138.89536z" fill="#000000" /></svg>',
			title: 'Document Library',
			description: 'View Documents as a Library.',
			category: 'Library',
			type: 'iframe',
			url: 'https://elementor.bplugins.com/demo/document-library/'
		},
		{
			icon: '<svg width="800px" height="800px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M850.903995 414.630553h-0.974739V367.987457c0-65.413986-62.100693-126.406834-95.553074-159.147615l-7.470267-7.406787C648.55661 103.086822 607.179356 94.83533 573.138241 94.83533l-11.235094-0.06348H293.947238c-23.191003 0-39.365319 15.91425-39.365319 38.717199v129.78668h-82.302974c-42.09295 0-76.392084 34.233606-76.392084 76.392084V851.08727c0 41.251316 32.869791 74.769226 73.794487 76.196522 0.585662 0 0.974739 0.263139 1.559377 0.263139H850.902971c42.158478 0 76.455565-34.300158 76.455565-76.458637V491.022637c0.001024-42.096021-34.296063-76.392084-76.454541-76.392084z" fill="#27323A" /><path d="M711.632041 236.707953l7.795863 7.72931c11.368199 11.171613 27.99712 27.671525 43.263251 46.316477-29.360936-9.029645-60.996944-11.108132-89.513175-12.279457-1.103748-20.331291-4.612603-57.358056-15.980802-91.850705 15.26613 12.601981 33.128834 28.775273 54.434863 50.084375z" fill="#F4CE73" /><path d="M304.469707 144.660662h257.301359l11.238165 0.063481c5.783928 0 13.316653 0.066553 24.62137 4.094517l3.312269 3.442303c29.101893 28.775273 39.55781 100.687859 39.55781 142.065112 0 8.963092 7.01771 16.303326 15.980802 16.629946l6.106452 0.259043c44.237989 1.689411 99.320972 3.831379 132.449806 33.844529l0.652215 0.585663c2.597597 7.792791 4.546051 15.588654 4.546051 23.058921 0 0-0.066553 25.596109-0.066553 45.9274H565.474459c-39.950981 0-74.117011 54.238277-88.994065 54.238278H304.469707V144.660662z" fill="#FFFFFF" /><path d="M188.323228 545.260915v306.541027c0 13.383205-5.325228 24.751404-21.695106 24.881437-14.421425-0.130033-20.853472-11.108132-20.853473-25.596109V339.667813c0-14.616987 11.89038-26.504296 26.504296-26.504295h82.302974v156.74558c-37.286832 5.066185-66.258691 36.702193-66.258691 75.351817z" fill="#79CCBF" /><path d="M877.470747 851.08727c0 14.616987-11.949766 26.570848-26.566752 26.570848H234.250628c0.063481-0.325596 0.130033-0.522182 0.196586-0.781224 1.427296-7.403715 3.764826-14.032348 3.764826-22.539812V545.260915c0-14.613915 11.952837-26.504296 26.570848-26.504296h211.699554c25.203961 0 42.029469-15.588654 58.399347-30.724751 7.792791-7.2102 23.970179-22.217288 31.113827-23.51455h284.909403c14.616987 0 26.566753 11.886285 26.566752 26.504296V851.08727z" fill="#F4CE73" /><path d="M776.719407 589.954533H571.775449c-11.949766 0-21.631625 9.678788-21.631625 21.631625 0 12.016318 9.68186 21.695106 21.631625 21.695106h204.944982c11.89038 0 21.568144-9.678788 21.568145-21.695106 0-11.953861-9.678788-21.631625-21.569169-21.631625zM776.719407 685.57416H571.775449c-11.949766 0-21.631625 9.678788-21.631625 21.631625 0 11.949766 9.68186 21.628554 21.631625 21.628554h204.944982c11.89038 0 21.568144-9.678788 21.568145-21.628554 0-11.953861-9.678788-21.631625-21.569169-21.631625z" fill="#27323A" /></svg>',
			title: 'Modern Document Library',
			children: [
				{
					title: 'Premium Grid',
					type: 'iframe',
					url: 'https://elementor.bplugins.com/demo/modern-document-library-premium-grid/'
				},
				{
					title: 'Sleek List',
					type: 'iframe',
					url: 'https://elementor.bplugins.com/demo/modern-document-library-sleek-list/'
				},
				{
					title: 'Minimalistic Row',
					type: 'iframe',
					url: 'https://elementor.bplugins.com/demo/modern-document-library-minimalistic-row/'
				},
				{
					title: 'Bold Accent Card',
					type: 'iframe',
					url: 'https://elementor.bplugins.com/demo/modern-document-library-bold-accent-cards/'
				},
				{
					title: 'Duo Tone Color Grid',
					type: 'iframe',
					url: 'https://elementor.bplugins.com/demo/modern-document-gallery-duo-tone-color-grid-cards/'
				},
				{
					title: 'Classic Table',
					type: 'iframe',
					url: 'https://elementor.bplugins.com/demo/moder-document-library-classic-table/'
				},
				{
					title: 'Floating Action Grid',
					type: 'iframe',
					url: 'https://elementor.bplugins.com/demo/modern-document-library-floating-action-grid/'
				},
				{
					title: 'Glassmorphic Cards',
					type: 'iframe',
					url: 'https://elementor.bplugins.com/demo/modern-document-viewer-glassmorphic-cards/'
				},
				{
					title: 'Timeline Rows',
					type: 'iframe',
					url: 'https://elementor.bplugins.com/demo/modern-document-library-timeline-rows/'
				},
				{
					title: 'Split Timeline',
					type: 'iframe',
					url: 'https://elementor.bplugins.com/demo/modern-document-library-split-timeline/'
				},
				{
					title: 'Styled Table View',
					type: 'iframe',
					url: 'https://elementor.bplugins.com/demo/modern-document-library-styled-table-view/'
				},
				{
					title: 'Glowing Timeline',
					type: 'iframe',
					url: 'https://elementor.bplugins.com/demo/modern-document-library-glowing-timeline/'
				}
			]
		},
	]
}

export const pricingInfo = {
	logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`, // Optional
	pluginId: 20539,
	planId: 34159,
	licenses: [
		1,
		3,
		null
	],
	button: {
		label: 'Buy Now ➜'
	},
	featured: {
		selected: 3, // choose from licenses item
	}
}
