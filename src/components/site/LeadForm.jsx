/* 626 Bath and Tile style: warm ivory form surface, precise labels, compact fields, and an orange action that feels confident rather than loud. */
import { useEffect } from "react";
export default function LeadForm() {
  useEffect(() => {
    // 1. Create the script element dynamically
    const script = document.createElement('script');
    script.src = "https://links.magnivodigital.com/js/form_embed.js";
    script.async = true;

    // 2. Append the script to the body to initialize the form
    document.body.appendChild(script);

    // 3. Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return (
   <div style={{ width: '100%', height: '1230px' }}>
      <iframe
        src="https://links.magnivodigital.com/widget/form/JpsCa4mRYJV0JCaTw22p"
        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
        id="inline-JpsCa4mRYJV0JCaTw22p" 
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="website contact us form"
        data-height="1230"
        data-layout-iframe-id="inline-JpsCa4mRYJV0JCaTw22p"
        data-form-id="JpsCa4mRYJV0JCaTw22p"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="website contact us form"
      />
    </div>
  );
}
