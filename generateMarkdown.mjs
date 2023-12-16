export function renderLicenseBadge(license) {
    if (!license) {
      return '';
    }
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  
  export function renderLicenseLink(license) {
    if (!license) {
      return '';
    }
    return `[License](https://opensource.org/licenses/${license})`;
  }
  
  export function renderLicenseSection(license) {
    if (!license) {
      return '';
    }
    return `## License
  
  This project is licensed under the ${license} license. See the [LICENSE](LICENSE) file for details.`;
  }
  
  export function generateMarkdown(data) {
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseLink = renderLicenseLink(data.license);
    const licenseSection = renderLicenseSection(data.license);
  
    return `# ${data.title}
  
  ${licenseBadge}
  ${licenseLink}
  
  ## Description
  
  ${data.description}
  
  ## User Story
  
  ${data.userstory}

  ## Here's a step by step guide to our app:

  ${data.guide}

  ## How to install the app:

  ${data.install}

  ## How to report issues about the app:

  ${data.report}

  ## How other developers can contribute to the succession of this app:

  ${data.contributions}
  
  ${licenseSection}
  `;
  }