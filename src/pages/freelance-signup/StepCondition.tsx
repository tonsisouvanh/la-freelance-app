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
        <p className="mb-5">
          Terms and conditions (T&Cs), also referred to as terms of service
          (ToS) or terms of use (ToU), are essentially a legal contract between
          a service provider and its users. They outline the rules,
          expectations, and guidelines users must follow when accessing a
          website, app, or service. Here's a breakdown of what T&Cs typically
          cover: * **Acceptable Use:** This defines how users are allowed to
          interact with the platform. It may prohibit illegal activities, hate
          speech, spamming, or anything that could harm the service or other
          users. * **User Accounts:** T&Cs may specify how user accounts are
          created, managed, and terminated. They may also address password
          security and user responsibility for account activity. *
          **Intellectual Property:** This clarifies ownership of content and
          materials on the platform. It protects things like logos, trademarks,
          copyrights, and user-generated content. * **Privacy Policy:** While
          often a separate document, T&Cs may reference the privacy policy which
          details how user data is collected, used, and protected.
        </p>
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
