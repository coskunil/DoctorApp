function slicePolicyAndTermsText(value, terms, policy) {
    const termsTag = `<t${terms}t>`;
    const policyTag = `<p${policy}p>`;
    const resultWithTerms = value.replace(terms, termsTag);
    const resultWithPolicy = resultWithTerms.replace(policy, policyTag);
    const totalStringLength = resultWithPolicy.length;
    const termsFirstIndex = resultWithPolicy.indexOf('<t');
    const termsLastIndex = resultWithPolicy.indexOf('t>');
    const policyFirstIndex = resultWithPolicy.indexOf('<p');
    const policyLastIndex = resultWithPolicy.indexOf('p>');
  
    let startText,
      middleText,
      lastText,
      firstText,
      secondText,
      firstNavigation,
      secondNavigation;
  
    if (termsFirstIndex < policyFirstIndex) {
      startText = resultWithPolicy.slice(
        0,
        termsFirstIndex === 0 ? 0 : termsFirstIndex - 1,
      );
      lastText = resultWithPolicy.slice(policyLastIndex + 2, totalStringLength);
      middleText = resultWithPolicy.slice(termsLastIndex + 2, policyFirstIndex);
      firstText = terms;
      secondText = policy;
      firstNavigation = 'Terms';
      secondNavigation = 'PrivacyPolicy';
    } else {
      startText = resultWithPolicy.slice(
        0,
        policyFirstIndex === 0 ? 0 : policyFirstIndex - 1,
      );
      lastText = resultWithPolicy.slice(termsLastIndex + 2, totalStringLength);
      middleText = resultWithPolicy.slice(policyLastIndex + 2, termsFirstIndex);
      firstText = policy;
      secondText = terms;
      firstNavigation = 'PrivacyPolicy';
      secondNavigation = 'Terms';
    }
  
    return {
      startText,
      middleText,
      lastText,
      firstText,
      secondText,
      firstNavigation,
      secondNavigation,
    };
  }
  
  function sliceColoredText(value, orangeTextValue) {
    const orangeTextTag = `<${orangeTextValue}>`;
    const resultWithOrangeText = value.replace(orangeTextValue, orangeTextTag);
    const totalStringLength = resultWithOrangeText.length;
    const firstIndex = resultWithOrangeText.indexOf('<');
    const lastIndex = resultWithOrangeText.indexOf('>');
    const startText = resultWithOrangeText.slice(
      0,
      firstIndex === 0 ? 0 : firstIndex - 1,
    );
    const lastText = resultWithOrangeText.slice(lastIndex + 1, totalStringLength);
  
    return {
      startText,
      lastText,
    };
  }
  
  function sliceSpecialText(value) {
    const instagramTag = `<@>`;
    const resultWithInstagram = value.replace('@', instagramTag);
    const totalStringLength = resultWithInstagram.length;
    const firstIndex = resultWithInstagram.indexOf('<');
    const lastIndex = resultWithInstagram.indexOf('>');
    const startText = resultWithInstagram.slice(
      0,
      firstIndex === 0 ? 0 : firstIndex - 1,
    );
    const lastText = resultWithInstagram.slice(lastIndex + 1, totalStringLength);
  
    return {
      startText,
      lastText,
    };
  }
  
  export {slicePolicyAndTermsText, sliceColoredText, sliceSpecialText};
  