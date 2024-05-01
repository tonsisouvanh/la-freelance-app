import { CheckboxProps } from "antd";
import { FreelanceSignupFieldType } from "../../type";

type Props = {
  Form: any;
  Checkbox: any;
  title: string;
  setIsAacceptTerms: React.Dispatch<React.SetStateAction<boolean>>;
};

const StepCondition = ({ Form, Checkbox, title, setIsAacceptTerms }: Props) => {
  const onChange: CheckboxProps["onChange"] = (e) => {
    const checkValue = e.target.checked;
    if (checkValue) setIsAacceptTerms(true);
    else setIsAacceptTerms(false);
  };

  return (
    <>
      <div className="flex flex-col gap-5 border p-4 lg:p-6 rounded-md">
        <h1 className="text-xl font-bold text-center">{title}</h1>
        <div className="space-y-4 max-h-96 overflow-auto">
          <p className="text-base leading-loose text-justify">
            Effective Date: April 30, 2024 This privacy policy ("Policy")
            describes how [Company Name] ("we," "us," or "our") collects, uses,
            and discloses your personal information when you use our website,
            mobile application, or other online services (collectively, the
            "Service"). Information We Collect We collect several different
            types of information for various purposes to improve our Service to
            you. Personal Information: This may include information that can be
            used to directly or indirectly identify you, such as your name,
            email address, phone number, or username. Usage Data: This
            information may include data about your activity on the Service,
            such as the pages you visit, the time and date of your visit, and
            the searches you make. Device Data: This is non-personal data
            collected automatically about your device, such as your IP address,
            operating system, browser type, and device identifier. Use of Your
            Information We may use your information for the following purposes:
            To provide and maintain the Service To improve and personalize the
            Service To send you marketing and promotional communications (with
            your consent) To respond to your inquiries and requests For security
            and fraud prevention Sharing of Your Information We may share your
            information with third-party vendors who provide services to support
            our business operations. We will only share your information with
            these vendors in accordance with this Policy. We may also disclose
            your information if required by law or in the good faith belief that
            such action is necessary to comply with legal processes, protect the
            security of others, or investigate fraud. Data Retention We will
            retain your information for as long as necessary to fulfill the
            purposes outlined in this Policy. We may also retain certain
            information as required by law or for legitimate business purposes.
            Your Rights You have certain rights regarding your personal
            information, including the right to: Access your information Rectify
            inaccurate information Request deletion of your information Object
            to the processing of your information Security We take reasonable
            steps to protect your information from unauthorized access,
            disclosure, alteration, or destruction. However, no internet
            transmission or electronic storage method is completely secure.
            Children's Privacy Our Service does not address anyone under the age
            of [Age]. We do not knowingly collect personal information from
            children under [Age]. If you are a parent or guardian and you are
            aware that your child has provided us with personal information,
            please contact us. If we become aware that we have collected
            personal information from a child under [Age], we will take steps to
            remove that information from our servers. Changes to This Policy We
            may update our Policy from time to time. We will notify you of any
            changes by posting the new Policy on this page. Contact Us If you
            have any questions about this Policy, please contact us: By email:
            [email protected] By visiting this page on our website: [link to
            contact page]
          </p>
        </div>
        <label htmlFor=""></label>
        <Form.Item<FreelanceSignupFieldType>
          valuePropName="checked"
          label=""
          name="acceptTerms"
        >
          <Checkbox onChange={onChange}>ຍອມຮັບ</Checkbox>
        </Form.Item>
      </div>
    </>
  );
};

export default StepCondition;
