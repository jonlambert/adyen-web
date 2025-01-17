import { Language } from '../../../language/Language';
import { CVCPolicyType } from './lib/core/AbstractSecuredField';

export interface SFPProps {
    /**
     * CSF RELATED (±22)
     */
    allowedDOMAccess?: boolean;
    autoFocus?: boolean;
    brands?: string[];
    groupTypes?: string[];
    keypadFix?: boolean;
    loadingContext: string;
    onAllValid?;
    onAutoComplete?;
    onBinValue?;
    onBrand?;
    onConfigSuccess?;
    onError?;
    onFieldValid?;
    onFocus?;
    onLoad?;
    clientKey?: string;
    placeholders?: object;
    rootNode?: HTMLElement;
    showWarnings?: boolean;
    styles?: object;
    trimTrailingSeparator?: boolean;
    type: string;

    /**
     * SFP RELATED (6)
     */
    i18n: Language;
    koreanAuthenticationRequired: boolean;
    hasKoreanFields: boolean;
    onChange;
    render;
    legacyInputMode: boolean;
    minimumExpiryDate: string;

    /**
     * RELATED TO COMPS HIGHER UP THE RENDER CHAIN - Card, CardInput etc (±39)
     */
    amount: object;
    billingAddressAllowedCountries: string[];
    billingAddressRequired: boolean;
    billingAddressRequiredFields: string[];
    brand: string;
    createFromAction: () => {};
    cvcPolicy: CVCPolicyType;
    data: object;
    details: object[];
    enableStoreDetails: boolean;
    environment: string;
    expiryMonth: string; // one-click card
    expiryYear: string; // one-click card
    hasCVC: boolean;
    hasHolderName: boolean;
    hideCVC: boolean;
    holderName: string;
    holderNameRequired: boolean;
    hasStoreDetails: boolean;
    id: string; // one-click card
    installmentOptions: object;
    lastFour: string; // one-click card
    locale: string;
    modules: object;
    name: string;
    onAdditionalDetails: () => {};
    onBlur: () => {};
    onSubmit: () => {};
    payButton: () => {};
    paymentMethods: object[];
    paymentMethodsResponse: object;
    risk: object; // custom card comp
    showBrandIcon: boolean;
    showPayButton: boolean;
    storedDetails: boolean;
    storedPaymentMethodId: string; // one-click card
    storedPaymentMethods: object[];
    supportedShopperInteractions: string[]; // one-click card
}

export default {
    type: 'card',

    // Settings
    keypadFix: true,
    rootNode: null,
    loadingContext: null,
    groupTypes: [],
    allowedDOMAccess: false,
    showWarnings: false,
    autoFocus: true,
    trimTrailingSeparator: true,

    // Events
    onChange: () => {},
    onLoad: () => {},
    onConfigSuccess: () => {},
    onAllValid: () => {},
    onFieldValid: () => {},
    onBrand: () => {},
    onError: () => {},
    onBinValue: () => {},
    onFocus: () => {},
    onAutoComplete: () => {},

    // Customization
    placeholders: {},
    styles: {}
};
