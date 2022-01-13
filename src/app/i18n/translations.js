

export const translations = {
	"en": {
		"name": "Name",
		"repositoryAndDocumentation": "Repository & Documentation",
		"softwareDetails": "Software Details",
		"legalAndReuse": "Legal & Reuse",
		"descriptionAndFeatures": "Description & Features",
		"logoAndScreenshots": "Logo & Screenshots",
		"purposeAndAudience": "Purpose & Audience",
		"maintenance": "Maintenance",
		"field-name-label": "Name of the software",
		"field-name-description": "\nThis key contains the name of the software. It contains the (short) public name of the product, \nwhich can be localized in the specific localization section. It should be the name most people usually \nrefer to the software. In case the software has both an internal 'code' name and a commercial name, use the commercial name.",
		"field-releaseDate-label": "Release Date",
		"field-releaseDate-description": "\nThis key contains the date at which the latest version was released. This date is mandatory if the software has been released \nat least once and thus the version number is present.\n\t\t",
		"field-url-label": "Repository URL",
		"field-url-description": "A unique identifier for this software. This string must be a URL to the source code repository (git, svn, ...) in which the software is published. If the repository is available under multiple protocols, prefer HTTP/HTTPS URLs which don't require user authentication.",
		"field-applicationSuite-label": "Application Suite",
		"field-applicationSuite-description": "This key contains the name of the 'suite' to which the software belongs.",
		"field-landingURL-label": "Landing Page URL",
		"field-landingURL-description": "If the url parameter does not serve a human readable or browsable page, but only serves source code to a source control client, with this key you have an option to specify a landing page. This page, ideally, is where your users will land when they will click a button labeled something like 'Go to the application source code'. In case the product provides an automated graphical installer, this URL can point to a page which contains a reference to the source code but also offers the download of such an installer.",
		"field-localisedName-label": "Localised Name",
		"field-localisedName-description": "This key is an opportunity to localise the name in a specific language. It contains the (short) public name of the product. It should be the name most people usually refer to the software. In case the software has both an internal “code” name and a commercial name, use the commercial name.",
		"field-genericName-label": "Generic Name",
		"field-genericName-description": "This key is the “Generic name”, which refers to the specific category to which the software belongs. You can usually find the generic name in the presentation of the software, when you write: “Software xxx is a yyy” Notable examples include “Text Editor”, “Word Processor”, “Web Browser”, “Chat” and so on… The generic name can be up to 35 characters long.",
		"field-shortDescription-label": "Short Description",
		"field-shortDescription-description": "This key contains a short description of the software. It should be a single line containing a single sentence. Maximum 150 characters are allowed.",
		"field-longDescription-label": "Long Description",
		"field-longDescription-description": "This key contains a longer description of the software, between 500 and 10000 chars. It is meant to provide an overview of the capabilities of the software for a potential user. The audience for this text should be that of users of the software, not developers. You can think of this text as the description of the software that would be in its website (if the software had one).This description can contain some basic markdown: *italic*, **bold**, bullet points and [links](#).",
		"field-documentation-label": "Documentation",
		"field-documentation-description": "This key contains a reference to the user-level (not developer-level) documentation of the software. The value must be a URL to a hosted version of the documentation.It is suggested that the URL points to a hosted version of the documentation that is immediately readable through a common web browser in both desktop and mobile format. The documentation should be rendered in HTML and browsable like a website (with a navigation index, a search bar, etc.).",
		"field-apiDocumentation-label": "API Documentation",
		"field-apiDocumentation-description": "This key contains a reference to the API documentation of the software. The value must be a URL to a hosted version of the documentation.It is suggested that the URL points to a hosted version of the documentation that is immediately readable through a common web browser. The documentation should be rendered in HTML and browsable like a website (with a navigation index, a search bar, etc.), and if there is a reference or test deployment, possibly offer an interactive interface (e.g. Swagger).",
		"field-features-label": "Features",
		"field-features-description": "This key contains a list of software features, describing what capabilities the software allows to do. The audience for this text should be that of public decision makers who will be commissioning the software. The features should thus not target developers: instead of listing technical features referring to implementation details, prefer listing user-visible functionalities of the software.While the key is mandatory, there is no mandatory minimum or maximum number of features that should be listed in this key. Each feature must use a maximum of 100 characters.The suggested number of features to list is between 5 and 20, depending on the software size and complexity. There is no need for exhaustiveness, as users can always read the documentation for additional information.",
		"field-screenshots-label": "Screenshots",
		"field-screenshots-description": "This key is for some software screens with purpose to show an overview on how it works. It can be a relative or absolute path",
		"field-videos-label": "Videos",
		"field-videos-description": "This key contains one or multiple URLs of videos showing how the software works. Like screenshots, videos should be used to give a quick overview on how the software looks like and how it works. Videos must be hosted on a video sharing website that supports the oEmbed standard; popular options are YouTube and Vimeo.",
		"field-awards-label": "Awards",
		"field-awards-description": "A list of awards won by the software.",
		"field-isBasedOn-label": "Is Based On",
		"field-isBasedOn-description": "In case this software is a variant or a fork of another software, which might or might not contain a publiccode.yml file, this key will contain the url of the original project(s). The existence of this key identifies the fork as a software variant, descending from the specified repositories.",
		"field-softwareVersion-label": "Software Version",
		"field-softwareVersion-description": "This key contains the latest stable version number of the software. The version number is a string that is not meant to be interpreted and parsed but just displayed; parsers should not assume semantic versioning or any other specific version format.",
		"field-logo-label": "Logo",
		"field-logo-description": "This key contains the logo of the software. Logos should be in vector format; raster formats are only allowed as a fallback. In this case, they should be transparent PNGs, minimum 1000px of width. Acceptable formats: SVG, SVGZ, PNG",
		"field-monochromeLogo-label": "Logo Monochrome",
		"field-monochromeLogo-description": "A monochromatic (black) logo. The logo should be in vector format; raster formats are only allowed as a fallback. In this case, they should be transparent PNGs, minimum 1000px of width. Acceptable formats: SVG, SVGZ, PNG",
		"field-developmentStatus-label": "Development Status",
		"field-developmentStatus-description": "Allowed values: concept, development, beta, stable, obsolete",
		"field-softwareType-label": "Software Type",
		"field-softwareType-description": "Allowed values: standalone, addon, library, configurationFiles",
		"field-roadmap-label": "Roadmap",
		"field-roadmap-description": "A link to a public roadmap of the software.",
		"field-platforms-label": "Platforms",
		"field-platforms-description": "This key specifies which platform the software runs on. It is meant to describe the platforms that users will use to access and operate the software, rather than the platform the software itself runs on. Use the predefined values if possible. If the software runs on a platform for which a predefined value is not available, a different value can be used. Values: web, windows, mac, linux, ios, android. Human readable values outside this list are allowed.",
		"field-license-label": "License",
		"field-license-description": "This string describes the license under which the software is distributed. The string must contain a valid SPDX expression, referring to one (or multiple) open-source license. Please refer to the SPDX documentation for further information.",
		"field-mainCopyrightOwner-label": "Main Copyright Owner",
		"field-mainCopyrightOwner-description": "This string describes the entity that owns the copyright on 'most' of the code in the repository. Normally, this is the line that is reported with the copyright symbol at the top of most files in the repo.",
		"field-repoOwner-label": "Repository Owner",
		"field-repoOwner-description": "This string describes the entity that owns this repository; this might or might not be the same entity who owns the copyright on the code itself. For instance, in case of a fork of the original software, the repoOwner is probably different from the mainCopyrightOwner.",
		"field-authorsFile-label": "Authors File",
		"field-authorsFile-description": "Some open-source softwares adopt a convention of identify the copyright holders through a file that lists all the entities that own the copyright. This is common in projects strongly backed by a community where there are many external contributors and no clear single/main copyright owner. In such cases, this key can be used to refer to the authors file, using a path relative to the root of the repository.",
		"field-categories-label": "Category",
		"field-categories-description": "A list of words that can be used to describe the software and can help building catalogs of open software. Each tag must be in Unicode lowercase, and should not contain any Unicode whitespace character. The suggested character to separate multiple words is - (single dash). See also: description/[lang]/freeTags/",
		"field-scope-label": "Scope",
		"field-scope-description": "Public software could be very specific in scope because there is a large set of tasks that are specific to each type of administration. For instance, many softwares that are used in schools are probably not useful in hospitals. If you want to explicitly mark some software as only useful to certain types of administrations, you should add them to this key.The list of allowed values is defined in pa-types.md, and can be country-specific. This list can evolve at any time, separately from the version of this specification.",
		"field-countries-label": "Countries",
		"field-countries-description": "This key explicitly includes certain countries in the intended audience, i.e. the software explicitly claims compliance with specific processes, technologies or laws. All countries are specified using lowercase ISO 3166-1 alpha-2 two-letter country codes.",
		"field-unsupportedCountries-label": "Unsupported Countries",
		"field-unsupportedCountries-description": "This key explicitly marks countries as NOT supported. This might be the case if there is a conflict between how software is working and a specific law, process or technology. All countries are specified using lowercase ISO 3166-1 alpha-2 two-letter country codes.",
		"field-usedBy-label": "Used By",
		"field-usedBy-description": "A list of the names of prominent public administrations (that will serve as testimonials) that are currently known to the software maintainer to be using this software. Parsers are encouraged to enhance this list also with other information that can obtain independently; for instance, a fork of a software, owned by an administration, could be used as a signal of usage of the software.",
		"field-inputTypes-label": "Input Types",
		"field-inputTypes-description": "A list of Media Types (MIME Types) as mandated in RFC 6838 which the application can handle as output. In case the software does not support any input, you can skip this field or use application/x.empty.",
		"field-outputTypes-label": "Output Types",
		"field-outputTypes-description": "A list of Media Types (MIME Types) as mandated in RFC 6838 which the application can handle as output. In case the software does not support any output, you can skip this field or use application/x.empty.",
		"field-localisationReady-label": "Localisation Ready",
		"field-localisationReady-description": "If yes, the software has infrastructure in place or is otherwise designed to be multilingual. It does not need to be available in more than one language.",
		"field-availableLanguages-label": "Available Languages",
		"field-availableLanguages-description": "If present, this is the list of languages in which the software is available. Of course, this list will contain at least one language. The primary language subtag cannot be omitted, as mandated by the. See also: https://tools.ietf.org/html/bcp47",
		"field-type-label": "Maintenance Type",
		"field-type-description": "This key describes how the software is currently maintained. 'internal' means that the software is internally maintained by the repository owner. 'contract' means that there is a commercial contract that binds an entity to the maintenance of the software; 'community' means that the software is currently maintained by one or more people that donate their time to the project; 'none' means that the software is not actively maintained.",
		"field-contacts-label": "Contacts",
		"field-contacts-description": "One or more contacts maintaining this software. This key describes the technical people currently responsible for maintaining the software. All contacts need to be a physical person, not a company or an organisation. if somebody is acting as a representative of an institution, it must be listed within the affiliation of the contact. In case of a commercial agreement (or a chain of such agreements), specify the final entities actually contracted to deliver the maintenance. Do not specify the software owner unless it is technically involved with the maintenance of the product as well.",
		"field-contractors-label": "Contractors",
		"field-contractors-description": "This key describes the entity or entities, if any, that are currently contracted for maintaining the software. They can be companies, organizations, or other collective names.",
		"field-dependsOn-label": "Depends On",
		"field-dependsOn-description": "This section provides an overview on the system-level dependencies required to install and use this software."
	},
	"fr": {
		/* spell-checker: disable */
		"name": "Nom",
		"repositoryAndDocumentation": "Dépôt et documentation",
		"softwareDetails": "Détails sur le logiciel",
		"legalAndReuse": "Informations légales à propos de la réutilisabilité",
		"descriptionAndFeatures": "Déscription et fonctionnalités",
		"logoAndScreenshots": "Logo et capture d'écran",
		"purposeAndAudience": "Intérêt et audience",
		"maintenance": "Maintenance",
		"field-name-label": "Nom du logiciel",
		"field-name-description": `
Cette clef contient le nom du logiciel. Elle contient un nom public (court) du produit.
Ce doit être le nom qui est le plus couramment utilisé pour faire référence au logiciel.
Dans le cas où le logiciel est à la fois un nom de code et un nom commercial, utilisez
le nom commercial.`,
		"field-releaseDate-label": "Date de publication",
		"field-releaseDate-description": `
Cette clef contient la date à laquelle la dernière version a été publiée. Cette date est obligatoire si le logiciel a été publié au moins une fois et que le numéro de version est donc présent.`,
		"field-url-label": "URL du dépôt",
		"field-url-description": "Un identifiant unique pour ce logiciel. Cette chaîne de caractères doit être une URL pointant vers le code source du dépôt (git, svn, ...) via lequel le logiciel est publié. Si le dépôt est disponible via plusieurs protocoles, préférez les URLs en HTTP/HTTPS qui n'exigent pas d'authentification.",
		"field-applicationSuite-label": "Suite applicative",
		"field-applicationSuite-description": "Ce champ contient le nom de la 'suite' à laquelle appartient le logiciel.",
		"field-landingURL-label": "URL de la page d'accueil",
		/* i18n: wip continues here */
		"field-landingURL-description": "If the url parameter does not serve a human readable or browsable page, but only serves source code to a source control client, with this key you have an option to specify a landing page. This page, ideally, is where your users will land when they will click a button labeled something like 'Go to the application source code'. In case the product provides an automated graphical installer, this URL can point to a page which contains a reference to the source code but also offers the download of such an installer.",
		"field-localisedName-label": "Localised Name",
		"field-localisedName-description": "This key is an opportunity to localise the name in a specific language. It contains the (short) public name of the product. It should be the name most people usually refer to the software. In case the software has both an internal “code” name and a commercial name, use the commercial name.",
		"field-genericName-label": "Generic Name",
		"field-genericName-description": "This key is the “Generic name”, which refers to the specific category to which the software belongs. You can usually find the generic name in the presentation of the software, when you write: “Software xxx is a yyy” Notable examples include “Text Editor”, “Word Processor”, “Web Browser”, “Chat” and so on… The generic name can be up to 35 characters long.",
		"field-shortDescription-label": "Short Description",
		"field-shortDescription-description": "This key contains a short description of the software. It should be a single line containing a single sentence. Maximum 150 characters are allowed.",
		"field-longDescription-label": "Long Description",
		"field-longDescription-description": "This key contains a longer description of the software, between 500 and 10000 chars. It is meant to provide an overview of the capabilities of the software for a potential user. The audience for this text should be that of users of the software, not developers. You can think of this text as the description of the software that would be in its website (if the software had one).This description can contain some basic markdown: *italic*, **bold**, bullet points and [links](#).",
		"field-documentation-label": "Documentation",
		"field-documentation-description": "This key contains a reference to the user-level (not developer-level) documentation of the software. The value must be a URL to a hosted version of the documentation.It is suggested that the URL points to a hosted version of the documentation that is immediately readable through a common web browser in both desktop and mobile format. The documentation should be rendered in HTML and browsable like a website (with a navigation index, a search bar, etc.).",
		"field-apiDocumentation-label": "API Documentation",
		"field-apiDocumentation-description": "This key contains a reference to the API documentation of the software. The value must be a URL to a hosted version of the documentation.It is suggested that the URL points to a hosted version of the documentation that is immediately readable through a common web browser. The documentation should be rendered in HTML and browsable like a website (with a navigation index, a search bar, etc.), and if there is a reference or test deployment, possibly offer an interactive interface (e.g. Swagger).",
		"field-features-label": "Features",
		"field-features-description": "This key contains a list of software features, describing what capabilities the software allows to do. The audience for this text should be that of public decision makers who will be commissioning the software. The features should thus not target developers: instead of listing technical features referring to implementation details, prefer listing user-visible functionalities of the software.While the key is mandatory, there is no mandatory minimum or maximum number of features that should be listed in this key. Each feature must use a maximum of 100 characters.The suggested number of features to list is between 5 and 20, depending on the software size and complexity. There is no need for exhaustiveness, as users can always read the documentation for additional information.",
		"field-screenshots-label": "Screenshots",
		"field-screenshots-description": "This key is for some software screens with purpose to show an overview on how it works. It can be a relative or absolute path",
		"field-videos-label": "Videos",
		"field-videos-description": "This key contains one or multiple URLs of videos showing how the software works. Like screenshots, videos should be used to give a quick overview on how the software looks like and how it works. Videos must be hosted on a video sharing website that supports the oEmbed standard; popular options are YouTube and Vimeo.",
		"field-awards-label": "Awards",
		"field-awards-description": "A list of awards won by the software.",
		"field-isBasedOn-label": "Is Based On",
		"field-isBasedOn-description": "In case this software is a variant or a fork of another software, which might or might not contain a publiccode.yml file, this key will contain the url of the original project(s). The existence of this key identifies the fork as a software variant, descending from the specified repositories.",
		"field-softwareVersion-label": "Software Version",
		"field-softwareVersion-description": "This key contains the latest stable version number of the software. The version number is a string that is not meant to be interpreted and parsed but just displayed; parsers should not assume semantic versioning or any other specific version format.",
		"field-logo-label": "Logo",
		"field-logo-description": "This key contains the logo of the software. Logos should be in vector format; raster formats are only allowed as a fallback. In this case, they should be transparent PNGs, minimum 1000px of width. Acceptable formats: SVG, SVGZ, PNG",
		"field-monochromeLogo-label": "Logo Monochrome",
		"field-monochromeLogo-description": "A monochromatic (black) logo. The logo should be in vector format; raster formats are only allowed as a fallback. In this case, they should be transparent PNGs, minimum 1000px of width. Acceptable formats: SVG, SVGZ, PNG",
		"field-developmentStatus-label": "Development Status",
		"field-developmentStatus-description": "Allowed values: concept, development, beta, stable, obsolete",
		"field-softwareType-label": "Software Type",
		"field-softwareType-description": "Allowed values: standalone, addon, library, configurationFiles",
		"field-roadmap-label": "Roadmap",
		"field-roadmap-description": "A link to a public roadmap of the software.",
		"field-platforms-label": "Platforms",
		"field-platforms-description": "This key specifies which platform the software runs on. It is meant to describe the platforms that users will use to access and operate the software, rather than the platform the software itself runs on. Use the predefined values if possible. If the software runs on a platform for which a predefined value is not available, a different value can be used. Values: web, windows, mac, linux, ios, android. Human readable values outside this list are allowed.",
		"field-license-label": "License",
		"field-license-description": "This string describes the license under which the software is distributed. The string must contain a valid SPDX expression, referring to one (or multiple) open-source license. Please refer to the SPDX documentation for further information.",
		"field-mainCopyrightOwner-label": "Main Copyright Owner",
		"field-mainCopyrightOwner-description": "This string describes the entity that owns the copyright on 'most' of the code in the repository. Normally, this is the line that is reported with the copyright symbol at the top of most files in the repo.",
		"field-repoOwner-label": "Repository Owner",
		"field-repoOwner-description": "This string describes the entity that owns this repository; this might or might not be the same entity who owns the copyright on the code itself. For instance, in case of a fork of the original software, the repoOwner is probably different from the mainCopyrightOwner.",
		"field-authorsFile-label": "Authors File",
		"field-authorsFile-description": "Some open-source softwares adopt a convention of identify the copyright holders through a file that lists all the entities that own the copyright. This is common in projects strongly backed by a community where there are many external contributors and no clear single/main copyright owner. In such cases, this key can be used to refer to the authors file, using a path relative to the root of the repository.",
		"field-categories-label": "Category",
		"field-categories-description": "A list of words that can be used to describe the software and can help building catalogs of open software. Each tag must be in Unicode lowercase, and should not contain any Unicode whitespace character. The suggested character to separate multiple words is - (single dash). See also: description/[lang]/freeTags/",
		"field-scope-label": "Scope",
		"field-scope-description": "Public software could be very specific in scope because there is a large set of tasks that are specific to each type of administration. For instance, many softwares that are used in schools are probably not useful in hospitals. If you want to explicitly mark some software as only useful to certain types of administrations, you should add them to this key.The list of allowed values is defined in pa-types.md, and can be country-specific. This list can evolve at any time, separately from the version of this specification.",
		"field-countries-label": "Countries",
		"field-countries-description": "This key explicitly includes certain countries in the intended audience, i.e. the software explicitly claims compliance with specific processes, technologies or laws. All countries are specified using lowercase ISO 3166-1 alpha-2 two-letter country codes.",
		"field-unsupportedCountries-label": "Unsupported Countries",
		"field-unsupportedCountries-description": "This key explicitly marks countries as NOT supported. This might be the case if there is a conflict between how software is working and a specific law, process or technology. All countries are specified using lowercase ISO 3166-1 alpha-2 two-letter country codes.",
		"field-usedBy-label": "Used By",
		"field-usedBy-description": "A list of the names of prominent public administrations (that will serve as testimonials) that are currently known to the software maintainer to be using this software. Parsers are encouraged to enhance this list also with other information that can obtain independently; for instance, a fork of a software, owned by an administration, could be used as a signal of usage of the software.",
		"field-inputTypes-label": "Input Types",
		"field-inputTypes-description": "A list of Media Types (MIME Types) as mandated in RFC 6838 which the application can handle as output. In case the software does not support any input, you can skip this field or use application/x.empty.",
		"field-outputTypes-label": "Output Types",
		"field-outputTypes-description": "A list of Media Types (MIME Types) as mandated in RFC 6838 which the application can handle as output. In case the software does not support any output, you can skip this field or use application/x.empty.",
		"field-localisationReady-label": "Localisation Ready",
		"field-localisationReady-description": "If yes, the software has infrastructure in place or is otherwise designed to be multilingual. It does not need to be available in more than one language.",
		"field-availableLanguages-label": "Available Languages",
		"field-availableLanguages-description": "If present, this is the list of languages in which the software is available. Of course, this list will contain at least one language. The primary language subtag cannot be omitted, as mandated by the. See also: https://tools.ietf.org/html/bcp47",
		"field-type-label": "Maintenance Type",
		"field-type-description": "This key describes how the software is currently maintained. 'internal' means that the software is internally maintained by the repository owner. 'contract' means that there is a commercial contract that binds an entity to the maintenance of the software; 'community' means that the software is currently maintained by one or more people that donate their time to the project; 'none' means that the software is not actively maintained.",
		"field-contacts-label": "Contacts",
		"field-contacts-description": "One or more contacts maintaining this software. This key describes the technical people currently responsible for maintaining the software. All contacts need to be a physical person, not a company or an organisation. if somebody is acting as a representative of an institution, it must be listed within the affiliation of the contact. In case of a commercial agreement (or a chain of such agreements), specify the final entities actually contracted to deliver the maintenance. Do not specify the software owner unless it is technically involved with the maintenance of the product as well.",
		"field-contractors-label": "Contractors",
		"field-contractors-description": "This key describes the entity or entities, if any, that are currently contracted for maintaining the software. They can be companies, organizations, or other collective names.",
		"field-dependsOn-label": "Depends On",
		"field-dependsOn-description": "This section provides an overview on the system-level dependencies required to install and use this software."
		/* spell-checker: enable */
	},
};
