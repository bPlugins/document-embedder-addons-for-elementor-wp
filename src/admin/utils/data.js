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
			icon:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="#292D32"></path> <path d="M11.4991 8.09V17.25C11.4991 17.61 11.1391 17.85 10.8091 17.71C9.59914 17.19 8.01913 16.71 6.91913 16.57L6.72913 16.55C6.11913 16.47 5.61914 15.28V7.57999C5.61914 6.81999 6.23915 6.25 6.99915 6.31C8.24915 6.41 10.0992 7.01001 11.2592 7.67001C11.4092 7.74001 11.4991 7.91 11.4991 8.09Z" fill="#292D32"></path> <path d="M18.38 7.69983V15.2698C18.38 15.8898 17.88 16.4598 17.27 16.5398L17.06 16.5598C15.97 16.7098 14.4 17.1798 13.19 17.6898C12.86 17.8298 12.5 17.5898 12.5 17.2298V8.0798C12.5 7.8998 12.59 7.72983 12.75 7.63983C13.91 6.98983 15.72 6.4098 16.95 6.2998H16.99C17.76 6.3098 18.38 6.92983 18.38 7.69983Z" fill="#292D32"></path> </g></svg>',
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
			icon: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#ECEDEF;" d="M106.324,8.017c-9.446,0-17.102,7.656-17.102,17.102v461.762c0,9.446,7.656,17.102,17.102,17.102 h376.251c9.446,0,17.102-7.656,17.102-17.102V84.977l-76.96-76.96H106.324z"></path> <path style="fill:#D9DCDF;" d="M439.819,84.977h59.858l-76.96-76.96v59.858C422.716,77.319,430.373,84.977,439.819,84.977z"></path> <path style="fill:#C6CACF;" d="M397.063,196.142H89.222V42.221h307.841c4.722,0,8.551,3.829,8.551,8.551v136.818 C405.614,192.313,401.785,196.142,397.063,196.142z"></path> <polygon style="fill:#68727E;" points="388.512,179.04 12.261,179.04 80.67,110.63 12.261,42.221 388.512,42.221 "></polygon> <path style="fill:#D9DCDF;" d="M414.165,461.228H174.733c-4.722,0-8.551-3.829-8.551-8.551v-222.33c0-4.722,3.829-8.551,8.551-8.551 h239.432c4.722,0,8.551,3.829,8.551,8.551v222.33C422.716,457.399,418.888,461.228,414.165,461.228z"></path> <path style="fill:#C6CACF;" d="M183.284,444.125v-222.33h-8.551c-4.722,0-8.551,3.829-8.551,8.551v222.33 c0,4.722,3.829,8.551,8.551,8.551h239.432c4.722,0,8.551-3.829,8.551-8.551v-8.551H183.284z"></path> <rect x="302.999" y="324.409" style="fill:#DB6B5E;" width="85.511" height="102.614"></rect> <rect x="320.101" y="341.511" style="fill:#FF8C78;" width="51.307" height="68.409"></rect> <path d="M499.677,426.489c4.428,0,8.017-3.589,8.017-8.017V84.977c0-2.1-0.862-4.183-2.347-5.668l-76.96-76.96 C426.9,0.863,424.817,0,422.716,0H106.324C92.473,0,81.205,11.268,81.205,25.119v9.086H12.261c-6.987,0-10.616,8.738-5.668,13.685 l62.74,62.741l-62.74,62.741c-4.947,4.947-1.32,13.685,5.668,13.685h68.944v299.825c0,13.851,11.268,25.119,25.119,25.119h376.251 c13.851,0,25.119-11.268,25.119-25.119v-34.205c0-4.427-3.588-8.017-8.017-8.017c-4.428,0-8.017,3.589-8.017,8.017v34.205 c0,5.01-4.076,9.086-9.086,9.086H106.324c-5.01,0-9.086-4.076-9.086-9.086V187.056h51.841c4.427,0,8.017-3.589,8.017-8.017 s-3.589-8.017-8.017-8.017H31.615l54.724-54.724c3.131-3.131,3.131-8.207,0-11.337L31.615,50.238h348.88v120.785H183.284 c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h205.228c4.428,0,8.017-3.589,8.017-8.017V42.221 c0-4.427-3.588-8.017-8.017-8.017H97.238v-9.086c0-5.01,4.076-9.086,9.086-9.086H414.7v51.841c0,13.851,11.268,25.119,25.119,25.119 h51.841v325.478C491.66,422.9,495.248,426.489,499.677,426.489z M439.819,76.96c-5.01,0-9.086-4.076-9.086-9.086V27.37l49.589,49.59 H439.819z"></path> <path d="M182.75,136.284v-17.655c0.177,0.012,0.355,0.018,0.534,0.018h25.653c4.427,0,8.017-3.589,8.017-8.017V84.977 c0-4.427-3.589-8.017-8.017-8.017h-34.205c-4.427,0-8.017,3.589-8.017,8.017v51.307c0,4.427,3.589,8.017,8.017,8.017 S182.75,140.711,182.75,136.284z M182.75,92.994h18.171v9.62h-17.637c-0.18,0-0.357,0.005-0.534,0.018V92.994z"></path> <path d="M268.796,144.301c4.428,0,8.017-3.589,8.017-8.017v-34.205c0-13.851-11.268-25.119-25.119-25.119h-17.102 c-4.427,0-8.017,3.589-8.017,8.017v51.307c0,4.427,3.589,8.017,8.017,8.017H268.796z M242.608,92.994h9.086 c5.01,0,9.086,4.076,9.086,9.086v26.188h-18.171V92.994z"></path> <path d="M328.654,92.994c4.428,0,8.017-3.589,8.017-8.017c0-4.427-3.588-8.017-8.017-8.017h-34.205 c-4.428,0-8.017,3.589-8.017,8.017v51.307c0,4.427,3.588,8.017,8.017,8.017s8.017-3.589,8.017-8.017v-17.637h17.637 c4.428,0,8.017-3.589,8.017-8.017c0-4.427-3.588-8.017-8.017-8.017h-17.637v-9.62H328.654z"></path> <path d="M158.165,230.347v222.33c0,9.136,7.432,16.568,16.568,16.568h239.432c9.136,0,16.568-7.432,16.568-16.568v-222.33 c0-9.136-7.432-16.568-16.568-16.568H174.733C165.597,213.779,158.165,221.211,158.165,230.347z M174.199,230.347 c0-0.295,0.239-0.534,0.534-0.534h239.432c0.294,0,0.534,0.239,0.534,0.534v222.33c0,0.295-0.241,0.534-0.534,0.534H174.733 c-0.295,0-0.534-0.239-0.534-0.534L174.199,230.347L174.199,230.347z"></path> <path d="M303,435.04h85.511c4.428,0,8.017-3.589,8.017-8.017V324.409c0-4.427-3.588-8.017-8.017-8.017H303 c-4.428,0-8.017,3.589-8.017,8.017v102.614C294.984,431.45,298.572,435.04,303,435.04z M311.017,332.426h69.478v86.58h-69.478 V332.426z"></path> <path d="M303,264.017h94.063c4.428,0,8.017-3.589,8.017-8.017c0-4.427-3.588-8.017-8.017-8.017H303 c-4.428,0-8.017,3.589-8.017,8.017C294.984,260.427,298.572,264.017,303,264.017z"></path> <path d="M303,298.221h94.063c4.428,0,8.017-3.589,8.017-8.017c0-4.427-3.588-8.017-8.017-8.017H303 c-4.428,0-8.017,3.589-8.017,8.017C294.984,294.632,298.572,298.221,303,298.221z"></path> <path d="M191.835,264.017h85.512c4.428,0,8.017-3.589,8.017-8.017c0-4.427-3.588-8.017-8.017-8.017h-85.511 c-4.427,0-8.017,3.589-8.017,8.017C183.819,260.427,187.408,264.017,191.835,264.017z"></path> <path d="M191.835,298.221h85.512c4.428,0,8.017-3.589,8.017-8.017c0-4.427-3.588-8.017-8.017-8.017h-85.511 c-4.427,0-8.017,3.589-8.017,8.017C183.819,294.632,187.408,298.221,191.835,298.221z"></path> <path d="M191.835,332.426h85.512c4.428,0,8.017-3.589,8.017-8.017c0-4.427-3.588-8.017-8.017-8.017h-85.511 c-4.427,0-8.017,3.589-8.017,8.017C183.819,328.837,187.408,332.426,191.835,332.426z"></path> <path d="M191.835,366.63h85.512c4.428,0,8.017-3.589,8.017-8.017c0-4.427-3.588-8.017-8.017-8.017h-85.511 c-4.427,0-8.017,3.589-8.017,8.017C183.819,363.041,187.408,366.63,191.835,366.63z"></path> <path d="M191.835,400.835h85.512c4.428,0,8.017-3.589,8.017-8.017c0-4.427-3.588-8.017-8.017-8.017h-85.511 c-4.427,0-8.017,3.589-8.017,8.017C183.819,397.246,187.408,400.835,191.835,400.835z"></path> <path d="M191.835,435.04h85.512c4.428,0,8.017-3.589,8.017-8.017c0-4.427-3.588-8.017-8.017-8.017h-85.511 c-4.427,0-8.017,3.589-8.017,8.017C183.819,431.45,187.408,435.04,191.835,435.04z"></path> </g></svg>',
			title: 'Document Library',
			description: 'View Documents as a Library.',
			category: 'Library',
			type: 'iframe',
			url: 'https://elementor.bplugins.com/demo/document-library/'
		}
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
