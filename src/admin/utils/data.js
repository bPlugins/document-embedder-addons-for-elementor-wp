const slug = 'document-embedder-addons-for-elementor';

export const dashboardInfo = (info) => {
	const { version, isPremium, hasPro, pricingUrl, licenseActiveNonce, none, action } = info;

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
		changelogs: [
			{
				version: '1.1.7 18-Apr-26',
				type: 'fix',
				list: [
					'Fixed: PHP Fatal error on elementor editor',
				]
			},
			{
				version: '1.1.6 10-Mar-26',
				type: 'new',
				list: [
					'Release: New Widget( Flip Book PDF Viewer)',
				]
			},
			{
				version: '1.1.5 03-Mar-26',
				type: 'update',
				list: [
					'Update: Add new admin dashboard',
				]
			},
			{
				version: '1.1.4 22-Feb-26',
				type: 'new',
				list: [
					'Release: New Widget( Pdf.js PDF Viewer)',
					'Fixed: Refactor code',
				]
			},
			{
				version: '1.1.3 26-Jan-26',
				type: 'new',
				list: [
					'Release: New Widget( Document Library)',
					'Update: New Features Show/Hide Preview Button',
					'Update: New Features Show/Hide Download Button',
				]
			},
			{
				version: '1.1.2 05-Jan-26',
				type: 'fix',
				list: [
					'Fixed: Dashboard JS Error',
				]
			},
			{
				version: '1.1.1 03-Jan-26',
				type: 'new',
				list: [
					'Release: New Widget( Adobe PDF Viewer)',
					'Release: Full Window Adobe PDF Viewer',
					'Release: Sided Container Adobe PDF Viewer',
					'Release: In-Line Adobe PDF Viewer',
					'Release: Lightbox Adobe PDF Viewer',
				]
			},
			{
				version: '1.1.0 26-Nov-25',
				type: 'fix',
				list: [
					'Fixed: Sleek PDF Viewer Style Control Issue Fix '
				]
			},
			{
				version: '1.0.5 12-Nov-25',
				list: [
					'Fixed: PHP Warning'
				]
			},
			{
				version: '1.0.4',
				list: [
					'Fixed: Security issue'
				]
			},
			{
				version: '1.0.3',
				list: [
					'Reduce assets load'
				]
			},
			{
				version: '1.0.2',
				list: [
					'Add translate feature'
				]
			},
			{
				version: '1.0.0',
				list: [
					'First release'
				]
			}
		]
	}
}

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
			icon:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="#292D32"></path> <path d="M11.4991 8.09V17.25C11.4991 17.61 11.1391 17.85 10.8091 17.71C9.59914 17.19 8.01913 16.71 6.91913 16.57L6.72913 16.55C6.11913 16.47 5.61914 15.9 5.61914 15.28V7.57999C5.61914 6.81999 6.23915 6.25 6.99915 6.31C8.24915 6.41 10.0992 7.01001 11.2592 7.67001C11.4092 7.74001 11.4991 7.91 11.4991 8.09Z" fill="#292D32"></path> <path d="M18.38 7.69983V15.2698C18.38 15.8898 17.88 16.4598 17.27 16.5398L17.06 16.5598C15.97 16.7098 14.4 17.1798 13.19 17.6898C12.86 17.8298 12.5 17.5898 12.5 17.2298V8.0798C12.5 7.8998 12.59 7.72983 12.75 7.63983C13.91 6.98983 15.72 6.4098 16.95 6.2998H16.99C17.76 6.3098 18.38 6.92983 18.38 7.69983Z" fill="#292D32"></path> </g></svg>',
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
			title: 'Pdf.js PDF Viewer',
			description: 'PDF Viewer using PDF.js library.',
			category: 'PDF',
			type: 'iframe',
			url: 'https://elementor.bplugins.com/demo/pdf-js-pdf-viewer/'
		},
		{
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="file-earmark-slides-fill"><path d="M7 9.78V7.22c0-.096.106-.156.19-.106l2.13 1.279a.125.125 0 0 1 0 .214l-2.13 1.28A.125.125 0 0 1 7 9.778z"></path><path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M5 6h6a.5.5 0 0 1 .496.438l.5 4A.5.5 0 0 1 11.5 11h-3v2.016c.863.055 1.5.251 1.5.484 0 .276-.895.5-2 .5s-2-.224-2-.5c0-.233.637-.429 1.5-.484V11h-3a.5.5 0 0 1-.496-.562l.5-4A.5.5 0 0 1 5 6"></path></svg>',
			title: 'Google Slides Embedder',
			description: 'Embed Google Slides easily.',
			category: 'PowerPoint',
			type: 'iframe',
			url: 'https://elementor.bplugins.com/demo/google-slides-embedder/'
		},
		{
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z"></path></svg>',
			title: 'Google Sheets Embedder',
			description: 'Embed Google Sheets inline.',
			category: 'Excel',
			type: 'iframe',
			url: 'https://elementor.bplugins.com/demo/google-sheet-embedder/'
		},
		{
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"></path></svg>',
			title: 'PDF Embedder',
			description: 'View PDFs with navigation controls.',
			category: 'PDF',
			type: 'iframe',
			url: 'https://elementor.bplugins.com/demo/pdf-embedder/'
		},
		{
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM111 257.1l26.8 89.2 31.6-90.3c3.4-9.6 12.5-16.1 22.7-16.1s19.3 6.4 22.7 16.1l31.6 90.3L273 257.1c3.8-12.7 17.2-19.9 29.9-16.1s19.9 17.2 16.1 29.9l-48 160c-3 10-12 16.9-22.4 17.1s-19.8-6.2-23.2-16.1L192 336.6l-33.3 95.3c-3.4 9.8-12.8 16.3-23.2 16.1s-19.5-7.1-22.4-17.1l-48-160c-3.8-12.7 3.4-26.1 16.1-29.9s26.1 3.4 29.9 16.1z"></path></svg>',
			title: 'Word Embedder',
			description: 'View Word files in the browser.',
			category: 'Doc',
			type: 'iframe',
			url: 'https://elementor.bplugins.com/demo/word-viewer/'
		},
		{
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM136 240h68c42 0 76 34 76 76s-34 76-76 76H160v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V368 264c0-13.3 10.7-24 24-24zm68 104c15.5 0 28-12.5 28-28s-12.5-28-28-28H160v56h44z"></path></svg>',
			title: 'PowerPoint(MS Office) Embedder',
			description: 'Embed PowerPoint slides online.',
			category: 'PowerPoint',
			type: 'iframe',
			url: 'https://elementor.bplugins.com/demo/powerpoint-embedder/'
		},
		{
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path></svg>',
			title: 'Google Docs Embedder',
			description: 'Embed Word or Doc files inline.',
			category: 'Doc',
			type: 'iframe',
			url: 'https://elementor.bplugins.com/demo/google-doc-embedder/'
		},
		{
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="file-earmark-spreadsheet-fill"><path d="M6 12v-2h3v2z"></path><path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M3 9h10v1h-3v2h3v1h-3v2H9v-2H6v2H5v-2H3v-1h2v-2H3z"></path></svg>',
			title: 'Excel(MS Office) Embedder',
			description: 'View Excel sheets in the page.',
			category: 'Excel',
			type: 'iframe',
			url: 'https://elementor.bplugins.com/demo/excel-embedder/'
		},
		{
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm72 208c-13.3 0-24 10.7-24 24V336v56c0 13.3 10.7 24 24 24s24-10.7 24-24V360h44c42 0 76-34 76-76s-34-76-76-76H136zm68 104H160V256h44c15.5 0 28 12.5 28 28s-12.5 28-28 28z"></path></svg>',
			title: 'PowerPoint Viewer',
			description: 'Embed PowerPoint slides online.',
			category: 'PowerPoint',
			type: 'iframe',
			url: 'https://elementor.bplugins.com/demo/powerpoint-viewer/'
		},
		{
			icon: '<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6.633c.14-.056.308-.118.503-.181A9.77 9.77 0 0 1 7.5 6a9.77 9.77 0 0 1 2.997.452c.195.063.363.125.503.181v10.88A11.817 11.817 0 0 0 7.5 17c-1.46 0-2.649.248-3.5.513V6.633zm8-1.748a9.257 9.257 0 0 0-.888-.337A11.769 11.769 0 0 0 7.5 4c-1.526 0-2.755.271-3.612.548a8.889 8.889 0 0 0-1.001.389 5.905 5.905 0 0 0-.357.18l-.025.014-.009.005-.003.002h-.001c-.002.002-.247.147-.002.002A1 1 0 0 0 2 6v13a1 1 0 0 0 1.51.86l-.005.003h.001l.002-.001.001-.001.037-.02c.037-.02.098-.05.182-.09.17-.078.43-.188.775-.3A9.77 9.77 0 0 1 7.5 19a9.77 9.77 0 0 1 2.997.451 6.9 6.9 0 0 1 .775.3 3.976 3.976 0 0 1 .223.112m0 0h-.001l-.002-.001-.001-.001c.314.185.704.185 1.018 0l.037-.02c.037-.02.098-.05.182-.09a6.9 6.9 0 0 1 .775-.3A9.77 9.77 0 0 1 16.5 19a9.77 9.77 0 0 1 2.997.451 6.9 6.9 0 0 1 .775.3 3.976 3.976 0 0 1 .219.11A1 1 0 0 0 22 19V6a1 1 0 0 0-.49-.86l-.002-.001h-.001l-.003-.003-.01-.005-.024-.014a5.883 5.883 0 0 0-.357-.18 8.897 8.897 0 0 0-1-.389A11.769 11.769 0 0 0 16.5 4c-1.525 0-2.755.271-3.612.548a9.112 9.112 0 0 0-.888.337m8 1.748v10.88A11.817 11.817 0 0 0 16.5 17c-1.46 0-2.649.248-3.5.513V6.633c.14-.056.308-.118.503-.181A9.77 9.77 0 0 1 16.5 6a9.77 9.77 0 0 1 2.997.452c.195.063.363.125.503.181zm.49.228l.005.002h-.001l-.003-.002zm0 13l.004.002-.002-.002" fill="#0D0D0D"/></svg>',
			title: '3D Flip PDF Viewer',
			description: 'View PDFs with navigation controls.',
			category: 'PDF',
			type: 'iframe',
			url: 'https://elementor.bplugins.com/demo/flip-3d-pdf-viewer/'
		},
		{
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"></path></svg>',
			title: 'Sleek PDF Viewer',
			description: 'View PDFs with navigation controls.',
			category: 'PDF',
			type: 'iframe',
			url: 'https://elementor.bplugins.com/demo/sleek-pdf-viewer/'
		},
		{
			icon: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon style="fill:#FFAD61;" points="10.199,283.237 501.801,283.237 445.379,38.765 66.621,38.765 "></polygon> <g> <polygon style="fill:#FFE6B8;" points="350.745,14.849 161.255,14.849 161.255,280.58 305.342,280.58 350.745,235.176 "></polygon> <polygon style="fill:#FFE6B8;" points="380.117,73.31 131.883,73.31 131.883,421.418 320.638,421.418 380.117,361.938 "></polygon> <polygon style="fill:#FFE6B8;" points="101.09,444.004 410.91,444.004 410.91,131.771 175.325,131.771 101.09,206.007 "></polygon> </g> <polygon style="fill:#FFAD61;" points="101.09,206.007 175.325,131.771 175.391,206.071 "></polygon> <rect x="10.199" y="283.232" style="fill:#D35B38;" width="491.602" height="213.918"></rect> <circle style="fill:#BCC987;" cx="256" cy="392.19" r="38.652"></circle> <g> <path style="fill:#4D3D36;" d="M512,283.237c0-0.765-0.086-1.534-0.26-2.294L455.318,36.471c-1.069-4.627-5.189-7.905-9.938-7.905 h-84.433V14.85c0-5.632-4.567-10.199-10.199-10.199H161.253c-5.632,0-10.199,4.567-10.199,10.199v13.716H66.621 c-4.749,0-8.869,3.278-9.938,7.905L0.261,280.943C0.086,281.703,0,282.472,0,283.237l0,0V497.15 c0,5.632,4.567,10.199,10.199,10.199h491.602c5.632,0,10.199-4.567,10.199-10.199V283.237L512,283.237z M369.918,83.509v38.062 H175.325c-2.705,0-5.298,1.075-7.212,2.987l-26.031,26.031V83.509H369.918z M165.146,156.375l0.037,39.487l-39.487-0.037 L165.146,156.375z M111.29,216.211l64.092,0.059c0.003,0,0.006,0,0.009,0c2.705,0,5.298-1.075,7.212-2.987 c1.914-1.915,2.99-4.513,2.987-7.221l-0.059-64.092h215.18v131.068H111.29V216.211z M437.265,48.964l51.715,224.073h-67.872 V131.771c0-5.632-4.567-10.199-10.199-10.199h-20.592V73.31c0-5.632-4.567-10.199-10.199-10.199h-19.172V48.964H437.265z M340.547,25.049v38.061H171.453V25.049H340.547z M74.735,48.964h76.32v14.146h-19.172c-5.632,0-10.199,4.567-10.199,10.199v97.679 l-27.805,27.805c-1.912,1.913-2.987,4.507-2.987,7.212v67.032H23.02L74.735,48.964z M491.602,486.951H20.398V293.436h471.203 V486.951z"></path> <path style="fill:#4D3D36;" d="M256,441.039c26.937,0,48.851-21.914,48.851-48.851c0-26.937-21.914-48.852-48.851-48.852 s-48.851,21.914-48.851,48.851S229.063,441.039,256,441.039z M256,363.734c15.689,0,28.453,12.764,28.453,28.453 S271.689,420.641,256,420.641c-15.689,0-28.453-12.764-28.453-28.453C227.547,376.5,240.311,363.734,256,363.734z"></path> <path style="fill:#4D3D36;" d="M355.442,235.602h-3.57c-5.632,0-10.199,4.567-10.199,10.199S346.241,256,351.873,256h3.57 c5.632,0,10.199-4.567,10.199-10.199S361.074,235.602,355.442,235.602z"></path> <path style="fill:#4D3D36;" d="M317.195,235.602H156.558c-5.632,0-10.199,4.567-10.199,10.199S150.926,256,156.558,256h160.637 c5.632,0,10.199-4.567,10.199-10.199S322.827,235.602,317.195,235.602z"></path> </g> </g></svg>',
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
