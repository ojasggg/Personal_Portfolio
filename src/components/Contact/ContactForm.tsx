import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);
  if (state.submitting) {
    return (
      <div className="flex w-[50%] items-center justify-center">
        <svg
          aria-hidden="true"
          className="mr-2 h-8 w-8 animate-spin fill-black text-gray-200 dark:text-gray-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  if (state.succeeded) {
    return (
      <div className="w-[50%]">
        <p className="p-0 font-AvenirHeavy text-[36px] leading-tight text-black  xl:text-[50px]">
          Thank you for your message, will contact you soon!
        </p>
      </div>
    );
  }
  return (
    <div className="w-[50%]">
      <h1 className="p-0 font-AvenirHeavy text-[36px] leading-none text-black lg:w-[400px] xl:w-[528px] xl:text-[50px]">
        Would love to hear from you.
      </h1>
      <form className="mt-10 xl:mt-10 xl:w-full" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Name *"
            name="Name"
            className="w-[50%] border-b border-black/40 bg-transparent pb-[16px] font-AvenirRoman text-[18px] text-black placeholder:text-black/40 xl:pb-[22px]"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input
            type="email"
            placeholder="Email *"
            name="Email"
            className="w-[50%] border-b border-black/40 bg-transparent pb-[16px] font-AvenirRoman text-[18px] text-black placeholder:text-black/40 xl:pb-[22px]"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <input
          type="text"
          placeholder="Subject *"
          name="Subject"
          className="mt-[26px] w-full border-b border-black/40 bg-transparent pb-[16px] font-AvenirRoman text-[18px] text-black placeholder:text-black/40 xl:mt-[46px] xl:pb-[22px]"
        />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />
        <input
          type="text"
          placeholder="Message *"
          name="Message"
          className="mt-[26px] w-full border-b border-black/40 bg-transparent font-AvenirRoman text-[18px] text-black placeholder:text-black/40 lg:pb-[100px] xl:mt-[46px] xl:pb-[190px]"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="flex items-center  gap-[24px] text-black lg:mt-[20px] xl:mt-[50px]"
          type="submit"
          disabled={state.submitting}
        >
          <p className="font-AvenirHeavy text-[26px] xl:text-[36px]">Submit</p>
          <svg
            className="w-[16px] xl:w-[24px]"
            viewBox="0 0 23 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88038 6.01629C4.89016 6.14937 3.98911 5.52565 3.86783 4.62318C3.74655 3.7207 4.45095 2.88122 5.44117 2.74815L18.9644 0.930745C19.9546 0.797669 20.8556 1.42139 20.9769 2.32386L22.6333 14.6488C22.7546 15.5513 22.0502 16.3908 21.06 16.5238C20.0698 16.6569 19.1687 16.0332 19.0474 15.1307L17.9212 6.75078L3.54848 23.8795C2.93406 24.6118 1.79883 24.7644 1.01288 24.2203C0.226931 23.6763 0.087885 22.6416 0.702311 21.9094L15.0751 4.78061L5.88038 6.01629Z"
              fill="black"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
