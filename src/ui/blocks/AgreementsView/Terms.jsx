import React, { useEffect } from "react";
import { HashLinkStyled } from "./PrivacyPolicyStyled";
import { useQuery } from "../../../hooks";

const Terms = () => {
  const query = useQuery();
  const id = query.get("id");

  const getElement = (id) => {
    const el = document.getElementById(id);
    el.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  };

  useEffect(() => {
    id && getElement(id);
  }, [id]);

  return (
    <>
      <h2>Terms of Use</h2>
      <p>
        Welcome to Ucampus! By using our APK, you agree to abide by the following terms and conditions. Please read these terms carefully.
      </p>

      <h3>1. Acceptance of Terms</h3>
      <p>
        By downloading, accessing, or using the Ucampus APK, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use the APK.
      </p>

      <h3>2. Services Provided</h3>
      <p>
        Ucampus provides services related to food ordering, gym memberships, and uniform purchases. You agree to use these services in accordance with applicable laws and these terms.
      </p>

      <h3>3. User Accounts</h3>
      <p>
        To access some services, you may need to create an account. You are responsible for maintaining the confidentiality of your account and password and for all activities under your account. Ucampus reserves the right to terminate accounts that violate these terms.
      </p>

      <h3>4. Payments</h3>
      <p>
        All payments made through the APK for services like food ordering, gym memberships, and uniform purchases are final. Please review your order details before completing any transactions. In the case of any payment disputes, contact support through the app.
      </p>

      <h3>5. Content and Intellectual Property</h3>
      <p>
        All content available through the Ucampus APK, including text, graphics, logos, and software, is the property of Ucampus or its licensors. You may not copy, reproduce, distribute, or create derivative works from any of the content without express permission.
      </p>

      <h3>6. Prohibited Activities</h3>
      <p>
        You agree not to engage in any activities that:
      </p>
      <ul>
        <li>Violate any laws or regulations.</li>
        <li>Infringe upon the rights of Ucampus or third parties.</li>
        <li>Compromise the security of the APK or its users.</li>
      </ul>

      <h3>7. Termination</h3>
      <p>
        Ucampus reserves the right to suspend or terminate your access to the APK at any time, for any reason, including violation of these terms.
      </p>

      <h3>8. Liability Disclaimer</h3>
      <p>
        Ucampus provides the APK and services on an "as is" and "as available" basis. We make no warranties regarding the reliability, availability, or accuracy of the services provided.
      </p>

      <h3>9. Governing Law</h3>
      <p>
        These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any legal disputes shall be resolved in the courts of [Your Jurisdiction].
      </p>

      <h3>10. Changes to Terms</h3>
      <p>
        Ucampus reserves the right to modify these Terms of Use at any time. Any changes will be communicated through the APK, and continued use after such modifications constitutes your acceptance of the updated terms.
      </p>

      <h3>11. Contact Information</h3>
      <p>
        If you have any questions regarding these Terms of Use, please contact us through the support section within the APK.
      </p>
    </>
  );
};

export default Terms;