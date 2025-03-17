import React, { useState, useRef } from "react";
import SignaturePad from "react-signature-canvas";
import { useRouter } from "next/router";

interface FormData {
  homePhone: string;
  cellPhone: string;
  email: string;
  firstName: string;
  middleName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  gender: string;
  liveInCare: string;
  felony: string;
  vehicleYear: string;
  vehicleMake: string;
  driversLicense: string;
  experience: string[];
  tbTest: string;
  tbResult: string;
  startDate: string;
  hoursPerWeek: string;
  expectedRate: string;
  mondayShift: string;
  tuesdayShift: string;
  wednesdayShift: string;
  thursdayShift: string;
  fridayShift: string;
  saturdayShift: string;
  sundayShift: string;
  educationLevel: string;
  schoolName: string;
  fieldOfStudy: string;
  graduationYear: string;
  academicHonors: string;
  additionalCertifications: string;
  companyName: string;
  jobTitle: string;
  employmentStartDate: string;
  employmentEndDate: string;
  jobResponsibilities: string;
  reasonForLeaving: string;
  companyAddress: string;
  supervisorName: string;
  contactPreviousEmployer: string;
  certificationAgreement: boolean;
  applicantName: string;
  applicantSignature: string;
  signatureDate: string;
  cvFile: File | null;
}

interface FormErrors {
  homePhone: string;
  cellPhone: string;
  email: string;
  firstName: string;
  middleName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  gender: string;
  liveInCare: string;
  felony: string;
  vehicleYear: string;
  vehicleMake: string;
  driversLicense: string;
  experience: string;
  tbTest: string;
  tbResult: string;
  startDate: string;
  hoursPerWeek: string;
  expectedRate: string;
  mondayShift: string;
  tuesdayShift: string;
  wednesdayShift: string;
  thursdayShift: string;
  fridayShift: string;
  saturdayShift: string;
  sundayShift: string;
  educationLevel: string;
  schoolName: string;
  fieldOfStudy: string;
  graduationYear: string;
  academicHonors: string;
  additionalCertifications: string;
  companyName: string;
  jobTitle: string;
  employmentStartDate: string;
  employmentEndDate: string;
  jobResponsibilities: string;
  reasonForLeaving: string;
  companyAddress: string;
  supervisorName: string;
  contactPreviousEmployer: string;
  certificationAgreement: string;
  applicantName: string;
  applicantSignature: string;
  signatureDate: string;
  cvFile: string;
}

const ApplicationForm = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const totalSteps = 5;
  const [errors, setErrors] = useState<FormErrors>({
    homePhone: "",
    cellPhone: "",
    email: "",
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    gender: "",
    liveInCare: "",
    felony: "",
    vehicleYear: "",
    vehicleMake: "",
    driversLicense: "",
    experience: "",
    tbTest: "",
    tbResult: "",
    startDate: "",
    hoursPerWeek: "",
    expectedRate: "",
    mondayShift: "",
    tuesdayShift: "",
    wednesdayShift: "",
    thursdayShift: "",
    fridayShift: "",
    saturdayShift: "",
    sundayShift: "",
    educationLevel: "",
    schoolName: "",
    fieldOfStudy: "",
    graduationYear: "",
    academicHonors: "",
    additionalCertifications: "",
    companyName: "",
    jobTitle: "",
    employmentStartDate: "",
    employmentEndDate: "",
    jobResponsibilities: "",
    reasonForLeaving: "",
    companyAddress: "",
    supervisorName: "",
    contactPreviousEmployer: "",
    certificationAgreement: "",
    applicantName: "",
    applicantSignature: "",
    signatureDate: "",
    cvFile: "",
  });
  const [formData, setFormData] = useState<FormData>({
    homePhone: "",
    cellPhone: "",
    email: "",
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    gender: "",
    liveInCare: "",
    felony: "",
    vehicleYear: "",
    vehicleMake: "",
    driversLicense: "",
    experience: [],
    tbTest: "",
    tbResult: "",
    startDate: "",
    hoursPerWeek: "",
    expectedRate: "",
    mondayShift: "",
    tuesdayShift: "",
    wednesdayShift: "",
    thursdayShift: "",
    fridayShift: "",
    saturdayShift: "",
    sundayShift: "",
    educationLevel: "",
    schoolName: "",
    fieldOfStudy: "",
    graduationYear: "",
    academicHonors: "",
    additionalCertifications: "",
    companyName: "",
    jobTitle: "",
    employmentStartDate: "",
    employmentEndDate: "",
    jobResponsibilities: "",
    reasonForLeaving: "",
    companyAddress: "",
    supervisorName: "",
    contactPreviousEmployer: "",
    certificationAgreement: false,
    applicantName: "",
    applicantSignature: "",
    signatureDate: "",
    cvFile: null,
  });
  const signaturePadRef = useRef<SignaturePad>(null);

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^[\d\s()+\-\.x]+$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      if (name === "certificationAgreement") {
        setFormData((prev) => ({
          ...prev,
          [name]: checked,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          experience: checked
            ? [...prev.experience, name]
            : prev.experience.filter((exp) => exp !== name),
        }));
        // Clear experience error if at least one experience is selected
        if (checked || formData.experience.length > 1) {
          setErrors((prev) => ({
            ...prev,
            experience: "",
          }));
        }
      }
    } else if (type === "radio") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else if (type === "file") {
      // File inputs are handled by handleFileChange
      return;
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error when user makes a selection
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      email: value,
    }));

    if (value && !validateEmail(value)) {
      setErrors((prev) => ({
        ...prev,
        email: "Email must be formatted correctly.",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        email: "",
      }));
    }
  };

  const handlePhoneChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "homePhone" | "cellPhone"
  ) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (value && !validatePhoneNumber(value)) {
      setErrors((prev) => ({
        ...prev,
        [field]: "A valid phone number may only contain numbers, +()-. or x",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        cvFile: e.target.files![0],
      }));
      setErrors((prev) => ({
        ...prev,
        cvFile: "",
      }));
    }
  };

  const clearSignature = () => {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear();
      setFormData((prev) => ({
        ...prev,
        applicantSignature: "",
      }));
    }
  };

  const saveSignature = () => {
    if (signaturePadRef.current) {
      const signatureData = signaturePadRef.current.toDataURL();
      setFormData((prev) => ({
        ...prev,
        applicantSignature: signatureData,
      }));
      setErrors((prev) => ({
        ...prev,
        applicantSignature: "",
      }));
    }
  };

  const validateStep = (step: number) => {
    const newErrors = { ...errors };
    let isValid = true;

    switch (step) {
      case 1:
        // Validate personal information
        if (!formData.firstName) {
          newErrors.firstName = "First name is required";
          isValid = false;
        }
        if (!formData.middleName) {
          newErrors.middleName = "Middle name is required";
          isValid = false;
        }
        if (!formData.lastName) {
          newErrors.lastName = "Last name is required";
          isValid = false;
        }
        if (!formData.address) {
          newErrors.address = "Address is required";
          isValid = false;
        }
        if (!formData.city) {
          newErrors.city = "City is required";
          isValid = false;
        }
        if (!formData.state) {
          newErrors.state = "State is required";
          isValid = false;
        }
        if (!formData.zipCode) {
          newErrors.zipCode = "Zip code is required";
          isValid = false;
        }
        if (!formData.email) {
          newErrors.email = "Email is required";
          isValid = false;
        }
        if (!formData.homePhone) {
          newErrors.homePhone = "Home phone is required";
          isValid = false;
        }
        if (!formData.cellPhone) {
          newErrors.cellPhone = "Cell phone is required";
          isValid = false;
        }
        if (!formData.gender) {
          newErrors.gender = "Gender is required";
          isValid = false;
        }
        if (!formData.liveInCare) {
          newErrors.liveInCare = "Please select an option";
          isValid = false;
        }
        if (!formData.felony) {
          newErrors.felony = "Please select an option";
          isValid = false;
        }
        // Validate vehicle information
        if (!formData.vehicleYear) {
          newErrors.vehicleYear = "Vehicle year is required";
          isValid = false;
        } else if (!/^\d{4}$/.test(formData.vehicleYear)) {
          newErrors.vehicleYear = "Please enter a valid 4-digit year";
          isValid = false;
        }
        if (!formData.vehicleMake) {
          newErrors.vehicleMake = "Vehicle make is required";
          isValid = false;
        }
        if (!formData.driversLicense) {
          newErrors.driversLicense =
            "Please select if you have a driver's license";
          isValid = false;
        }
        // Validate experience - ensure at least one is selected
        if (formData.experience.length === 0) {
          newErrors.experience = "Please select at least one experience";
          isValid = false;
        }
        // Validate TB test information
        if (!formData.tbTest) {
          newErrors.tbTest =
            "Please select if you have had a TB test in the last 3 years";
          isValid = false;
        }
        // If TB test is yes, result must be selected
        if (formData.tbTest === "yes" && !formData.tbResult) {
          newErrors.tbResult = "Please select your TB test result";
          isValid = false;
        }
        break;
      case 2:
        // Validate Work Preference
        if (!formData.startDate) {
          newErrors.startDate = "Start date is required";
          isValid = false;
        }
        if (!formData.hoursPerWeek) {
          newErrors.hoursPerWeek = "Hours per week is required";
          isValid = false;
        }
        if (!formData.expectedRate) {
          newErrors.expectedRate = "Expected rate of pay is required";
          isValid = false;
        }
        // Validate Shift Availability
        if (!formData.mondayShift) {
          newErrors.mondayShift = "Please select Monday shift";
          isValid = false;
        }
        if (!formData.tuesdayShift) {
          newErrors.tuesdayShift = "Please select Tuesday shift";
          isValid = false;
        }
        if (!formData.wednesdayShift) {
          newErrors.wednesdayShift = "Please select Wednesday shift";
          isValid = false;
        }
        if (!formData.thursdayShift) {
          newErrors.thursdayShift = "Please select Thursday shift";
          isValid = false;
        }
        if (!formData.fridayShift) {
          newErrors.fridayShift = "Please select Friday shift";
          isValid = false;
        }
        if (!formData.saturdayShift) {
          newErrors.saturdayShift = "Please select Saturday shift";
          isValid = false;
        }
        if (!formData.sundayShift) {
          newErrors.sundayShift = "Please select Sunday shift";
          isValid = false;
        }
        break;
      case 3:
        // Validate Education Information
        if (!formData.educationLevel) {
          newErrors.educationLevel =
            "Please select your highest level of education";
          isValid = false;
        }
        if (!formData.schoolName) {
          newErrors.schoolName = "School/University name is required";
          isValid = false;
        }
        if (!formData.fieldOfStudy) {
          newErrors.fieldOfStudy = "Field of study is required";
          isValid = false;
        }
        if (!formData.graduationYear) {
          newErrors.graduationYear = "Graduation year is required";
          isValid = false;
        } else if (!/^\d{4}$/.test(formData.graduationYear)) {
          newErrors.graduationYear = "Please enter a valid 4-digit year";
          isValid = false;
        }
        break;
      case 4:
        // Validate Employment History
        if (!formData.companyName) {
          newErrors.companyName = "Company name is required";
          isValid = false;
        }
        if (!formData.jobTitle) {
          newErrors.jobTitle = "Job title is required";
          isValid = false;
        }
        if (!formData.employmentStartDate) {
          newErrors.employmentStartDate = "Start date is required";
          isValid = false;
        }
        if (!formData.employmentEndDate) {
          newErrors.employmentEndDate = "End date is required";
          isValid = false;
        }
        if (!formData.jobResponsibilities) {
          newErrors.jobResponsibilities = "Job responsibilities are required";
          isValid = false;
        }
        if (!formData.reasonForLeaving) {
          newErrors.reasonForLeaving = "Please select a reason for leaving";
          isValid = false;
        }
        if (!formData.contactPreviousEmployer) {
          newErrors.contactPreviousEmployer =
            "Please select if we can contact your previous employer";
          isValid = false;
        }
        break;
      case 5:
        if (!formData.certificationAgreement) {
          newErrors.certificationAgreement =
            "You must agree to the certification statement";
          isValid = false;
        }
        if (!formData.applicantName) {
          newErrors.applicantName = "Applicant name is required";
          isValid = false;
        }
        if (!formData.signatureDate) {
          newErrors.signatureDate = "Date is required";
          isValid = false;
        }
        if (!formData.cvFile) {
          newErrors.cvFile = "Please upload your CV";
          isValid = false;
        }
        break;
    }

    setErrors(newErrors);
    return isValid;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (validateStep(currentStep)) {
      setIsSubmitting(true);
      try {
        // Here you would typically make an API call to submit the form data
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating API call
        setShowSuccess(true);
        setTimeout(() => {
          router.push("/");
        }, 3000);
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const renderStep = (step: number) => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Personal Information
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-1">
                  First Name
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.firstName ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your first name"
                  required
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Middle Name
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.middleName ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your middle name"
                  required
                />
                {errors.middleName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.middleName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Last Name
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.lastName ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your last name"
                  required
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">
                  Address
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.address ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your address"
                  required
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  City
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.city ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your city"
                  required
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  State
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.state ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your state"
                  required
                />
                {errors.state && (
                  <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Zip Code
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.zipCode ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your zip code"
                  required
                />
                {errors.zipCode && (
                  <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-1">
                  Email
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleEmailChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your email"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Home Phone
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="tel"
                  name="homePhone"
                  value={formData.homePhone}
                  onChange={(e) => handlePhoneChange(e, "homePhone")}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.homePhone ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your home phone"
                  required
                />
                {errors.homePhone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.homePhone}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Cell Phone
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="tel"
                  name="cellPhone"
                  value={formData.cellPhone}
                  onChange={(e) => handlePhoneChange(e, "cellPhone")}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.cellPhone ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your cell phone"
                  required
                />
                {errors.cellPhone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.cellPhone}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 mb-1">
                Gender
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleInputChange}
                    className="form-radio h-4 w-4 text-primary"
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleInputChange}
                    className="form-radio h-4 w-4 text-primary"
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
              {errors.gender && (
                <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-gray-700 mb-1">
                  Open to live in Care
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="liveInCare"
                      value="yes"
                      checked={formData.liveInCare === "yes"}
                      onChange={handleInputChange}
                      className="form-radio h-4 w-4 text-primary"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="liveInCare"
                      value="no"
                      checked={formData.liveInCare === "no"}
                      onChange={handleInputChange}
                      className="form-radio h-4 w-4 text-primary"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
                {errors.liveInCare && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.liveInCare}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Convicted of a felony?
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="felony"
                      value="yes"
                      checked={formData.felony === "yes"}
                      onChange={handleInputChange}
                      className="form-radio h-4 w-4 text-primary"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="felony"
                      value="no"
                      checked={formData.felony === "no"}
                      onChange={handleInputChange}
                      className="form-radio h-4 w-4 text-primary"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
                {errors.felony && (
                  <p className="text-red-500 text-sm mt-1">{errors.felony}</p>
                )}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Vehicle Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">
                  Vehicle Year
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="vehicleYear"
                  value={formData.vehicleYear}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.vehicleYear ? "border-red-500" : ""
                  }`}
                  placeholder="Enter vehicle year"
                />
                {errors.vehicleYear && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.vehicleYear}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Vehicle Make
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="vehicleMake"
                  value={formData.vehicleMake}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.vehicleMake ? "border-red-500" : ""
                  }`}
                  placeholder="Enter vehicle make"
                />
                {errors.vehicleMake && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.vehicleMake}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 mb-1">
                Driver's License
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="driversLicense"
                    value="yes"
                    checked={formData.driversLicense === "yes"}
                    onChange={handleInputChange}
                    className={`form-radio h-4 w-4 text-primary ${
                      errors.driversLicense ? "border-red-500" : ""
                    }`}
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="driversLicense"
                    value="no"
                    checked={formData.driversLicense === "no"}
                    onChange={handleInputChange}
                    className={`form-radio h-4 w-4 text-primary ${
                      errors.driversLicense ? "border-red-500" : ""
                    }`}
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
              {errors.driversLicense && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.driversLicense}
                </p>
              )}
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Experience</h3>
            <p className="text-sm text-gray-600 mb-4">
              Please select at least one experience{" "}
              <span className="text-red-500">*</span>
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <label className="inline-flex items-center p-2 hover:bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  name="alzheimers"
                  checked={formData.experience.includes("alzheimers")}
                  onChange={handleInputChange}
                  className={`form-checkbox h-5 w-5 text-primary ${
                    errors.experience ? "border-red-500" : ""
                  }`}
                />
                <span className="ml-3 text-gray-700">Alzheimer's</span>
              </label>
              <label className="inline-flex items-center p-2 hover:bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  name="bedBath"
                  checked={formData.experience.includes("bedBath")}
                  onChange={handleInputChange}
                  className={`form-checkbox h-5 w-5 text-primary ${
                    errors.experience ? "border-red-500" : ""
                  }`}
                />
                <span className="ml-3 text-gray-700">Bed Bath</span>
              </label>
              <label className="inline-flex items-center p-2 hover:bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  name="cancer"
                  checked={formData.experience.includes("cancer")}
                  onChange={handleInputChange}
                  className={`form-checkbox h-5 w-5 text-primary ${
                    errors.experience ? "border-red-500" : ""
                  }`}
                />
                <span className="ml-3 text-gray-700">Cancer</span>
              </label>
              <label className="inline-flex items-center p-2 hover:bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  name="combative"
                  checked={formData.experience.includes("combative")}
                  onChange={handleInputChange}
                  className={`form-checkbox h-5 w-5 text-primary ${
                    errors.experience ? "border-red-500" : ""
                  }`}
                />
                <span className="ml-3 text-gray-700">Combative</span>
              </label>
              <label className="inline-flex items-center p-2 hover:bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  name="dementia"
                  checked={formData.experience.includes("dementia")}
                  onChange={handleInputChange}
                  className={`form-checkbox h-5 w-5 text-primary ${
                    errors.experience ? "border-red-500" : ""
                  }`}
                />
                <span className="ml-3 text-gray-700">Dementia</span>
              </label>
              <label className="inline-flex items-center p-2 hover:bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  name="dementiaExperience"
                  checked={formData.experience.includes("dementiaExperience")}
                  onChange={handleInputChange}
                  className={`form-checkbox h-5 w-5 text-primary ${
                    errors.experience ? "border-red-500" : ""
                  }`}
                />
                <span className="ml-3 text-gray-700">Dementia Experience</span>
              </label>
              <label className="inline-flex items-center p-2 hover:bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  name="gaitBelt"
                  checked={formData.experience.includes("gaitBelt")}
                  onChange={handleInputChange}
                  className={`form-checkbox h-5 w-5 text-primary ${
                    errors.experience ? "border-red-500" : ""
                  }`}
                />
                <span className="ml-3 text-gray-700">Gait Belt Experience</span>
              </label>
              <label className="inline-flex items-center p-2 hover:bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  name="glucoseMonitor"
                  checked={formData.experience.includes("glucoseMonitor")}
                  onChange={handleInputChange}
                  className={`form-checkbox h-5 w-5 text-primary ${
                    errors.experience ? "border-red-500" : ""
                  }`}
                />
                <span className="ml-3 text-gray-700">Glucose Monitor</span>
              </label>
              <label className="inline-flex items-center p-2 hover:bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  name="hospice"
                  checked={formData.experience.includes("hospice")}
                  onChange={handleInputChange}
                  className={`form-checkbox h-5 w-5 text-primary ${
                    errors.experience ? "border-red-500" : ""
                  }`}
                />
                <span className="ml-3 text-gray-700">Hospice</span>
              </label>
              <label className="inline-flex items-center p-2 hover:bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  name="hospiceExperience"
                  checked={formData.experience.includes("hospiceExperience")}
                  onChange={handleInputChange}
                  className={`form-checkbox h-5 w-5 text-primary ${
                    errors.experience ? "border-red-500" : ""
                  }`}
                />
                <span className="ml-3 text-gray-700">Hospice Experience</span>
              </label>
              <label className="inline-flex items-center p-2 hover:bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  name="hoyerLift"
                  checked={formData.experience.includes("hoyerLift")}
                  onChange={handleInputChange}
                  className={`form-checkbox h-5 w-5 text-primary ${
                    errors.experience ? "border-red-500" : ""
                  }`}
                />
                <span className="ml-3 text-gray-700">
                  Hoyer Lift Experience
                </span>
              </label>
              <label className="inline-flex items-center p-2 hover:bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  name="incontinence"
                  checked={formData.experience.includes("incontinence")}
                  onChange={handleInputChange}
                  className={`form-checkbox h-5 w-5 text-primary ${
                    errors.experience ? "border-red-500" : ""
                  }`}
                />
                <span className="ml-3 text-gray-700">Incontinence</span>
              </label>
              <label className="inline-flex items-center p-2 hover:bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  name="parkinsons"
                  checked={formData.experience.includes("parkinsons")}
                  onChange={handleInputChange}
                  className={`form-checkbox h-5 w-5 text-primary ${
                    errors.experience ? "border-red-500" : ""
                  }`}
                />
                <span className="ml-3 text-gray-700">Parkinson's</span>
              </label>
              <label className="inline-flex items-center p-2 hover:bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  name="stroke"
                  checked={formData.experience.includes("stroke")}
                  onChange={handleInputChange}
                  className={`form-checkbox h-5 w-5 text-primary ${
                    errors.experience ? "border-red-500" : ""
                  }`}
                />
                <span className="ml-3 text-gray-700">Stroke</span>
              </label>
            </div>
            {errors.experience && (
              <p className="text-red-500 text-sm mt-1">{errors.experience}</p>
            )}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-gray-700 mb-1">
                  Have you had a TB test in the last 3 Years?
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="tbTest"
                      value="yes"
                      checked={formData.tbTest === "yes"}
                      onChange={handleInputChange}
                      className={`form-radio h-4 w-4 text-primary ${
                        errors.tbTest ? "border-red-500" : ""
                      }`}
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="tbTest"
                      value="no"
                      checked={formData.tbTest === "no"}
                      onChange={handleInputChange}
                      className={`form-radio h-4 w-4 text-primary ${
                        errors.tbTest ? "border-red-500" : ""
                      }`}
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
                {errors.tbTest && (
                  <p className="text-red-500 text-sm mt-1">{errors.tbTest}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Result
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="tbResult"
                      value="negative"
                      checked={formData.tbResult === "negative"}
                      onChange={handleInputChange}
                      className={`form-radio h-4 w-4 text-primary ${
                        errors.tbResult ? "border-red-500" : ""
                      }`}
                    />
                    <span className="ml-2">Negative</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="tbResult"
                      value="positive"
                      checked={formData.tbResult === "positive"}
                      onChange={handleInputChange}
                      className={`form-radio h-4 w-4 text-primary ${
                        errors.tbResult ? "border-red-500" : ""
                      }`}
                    />
                    <span className="ml-2">Positive</span>
                  </label>
                </div>
                {errors.tbResult && (
                  <p className="text-red-500 text-sm mt-1">{errors.tbResult}</p>
                )}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Work Preference
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">
                  Start Date
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.startDate ? "border-red-500" : ""
                  }`}
                />
                {errors.startDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.startDate}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Ideal Hours Per Week
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="number"
                  name="hoursPerWeek"
                  value={formData.hoursPerWeek}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.hoursPerWeek ? "border-red-500" : ""
                  }`}
                  placeholder="Enter hours per week"
                />
                {errors.hoursPerWeek && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.hoursPerWeek}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Expected Rate of Pay/hr
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="number"
                  name="expectedRate"
                  value={formData.expectedRate}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.expectedRate ? "border-red-500" : ""
                  }`}
                  placeholder="Enter expected rate"
                />
                {errors.expectedRate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.expectedRate}
                  </p>
                )}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-primary mb-4">
              Shift Availability
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ].map((day) => (
                <div key={day}>
                  <label className="block text-gray-700 mb-1">
                    {day}
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <select
                    name={`${day.toLowerCase()}Shift`}
                    value={
                      formData[
                        `${day.toLowerCase()}Shift` as keyof FormData
                      ] as string
                    }
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors[`${day.toLowerCase()}Shift` as keyof FormErrors]
                        ? "border-red-500"
                        : ""
                    }`}
                  >
                    <option value="">Select shift</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                    <option value="live-in">Live-in</option>
                  </select>
                  {errors[`${day.toLowerCase()}Shift` as keyof FormErrors] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[`${day.toLowerCase()}Shift` as keyof FormErrors]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-4">Education</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">
                  Highest Level of Education Attained
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  name="educationLevel"
                  value={formData.educationLevel}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.educationLevel ? "border-red-500" : ""
                  }`}
                >
                  <option value="">Select education level</option>
                  <option value="highSchool">High School Diploma</option>
                  <option value="vocational">
                    Vocational / Technical Certificate
                  </option>
                  <option value="associate">Associate Degree</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="doctorate">Doctorate / PhD</option>
                  <option value="other">Others (Specify)</option>
                </select>
                {errors.educationLevel && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.educationLevel}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  School / University Name
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.schoolName ? "border-red-500" : ""
                  }`}
                  placeholder="Enter school/university name"
                />
                {errors.schoolName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.schoolName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Field of Study / Major
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.fieldOfStudy ? "border-red-500" : ""
                  }`}
                  placeholder="Enter field of study/major"
                />
                {errors.fieldOfStudy && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.fieldOfStudy}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Year Graduated
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.graduationYear ? "border-red-500" : ""
                  }`}
                  placeholder="Enter graduation year (YYYY)"
                />
                {errors.graduationYear && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.graduationYear}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">
                  Academic Honors / Awards
                </label>
                <input
                  type="text"
                  name="academicHonors"
                  value={formData.academicHonors}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter academic honors/awards (optional)"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Additional Certifications / Training
                </label>
                <textarea
                  name="additionalCertifications"
                  value={formData.additionalCertifications}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter additional certifications/training (optional)"
                  rows={3}
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Employment History
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">
                  Company Name
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.companyName ? "border-red-500" : ""
                  }`}
                  placeholder="Enter company name"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.companyName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Job Title / Position
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.jobTitle ? "border-red-500" : ""
                  }`}
                  placeholder="Enter job title"
                />
                {errors.jobTitle && (
                  <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-gray-700 mb-1">
                    Start Date
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="date"
                    name="employmentStartDate"
                    value={formData.employmentStartDate}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.employmentStartDate ? "border-red-500" : ""
                    }`}
                  />
                  {errors.employmentStartDate && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.employmentStartDate}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">
                    End Date
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="date"
                    name="employmentEndDate"
                    value={formData.employmentEndDate}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.employmentEndDate ? "border-red-500" : ""
                    }`}
                  />
                  {errors.employmentEndDate && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.employmentEndDate}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">
                Job Responsibilities & Achievements
                <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                name="jobResponsibilities"
                value={formData.jobResponsibilities}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.jobResponsibilities ? "border-red-500" : ""
                }`}
                placeholder="Enter job responsibilities and achievements"
                rows={4}
              />
              {errors.jobResponsibilities && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.jobResponsibilities}
                </p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">
                  Reason for Leaving
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  name="reasonForLeaving"
                  value={formData.reasonForLeaving}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.reasonForLeaving ? "border-red-500" : ""
                  }`}
                >
                  <option value="">Select reason</option>
                  <option value="careerGrowth">Seeking Career Growth</option>
                  <option value="downsizing">Company Downsizing</option>
                  <option value="endContract">End of Contract</option>
                  <option value="personal">Personal Reasons</option>
                  <option value="other">Others (Specify)</option>
                </select>
                {errors.reasonForLeaving && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.reasonForLeaving}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Company Address
                </label>
                <input
                  type="text"
                  name="companyAddress"
                  value={formData.companyAddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter company address (optional)"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Supervisor / Manager's Name
                </label>
                <input
                  type="text"
                  name="supervisorName"
                  value={formData.supervisorName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter supervisor name (optional)"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  May we contact your previous employer?
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="contactPreviousEmployer"
                      value="yes"
                      checked={formData.contactPreviousEmployer === "yes"}
                      onChange={handleInputChange}
                      className={`form-radio h-4 w-4 text-primary ${
                        errors.contactPreviousEmployer ? "border-red-500" : ""
                      }`}
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="contactPreviousEmployer"
                      value="no"
                      checked={formData.contactPreviousEmployer === "no"}
                      onChange={handleInputChange}
                      className={`form-radio h-4 w-4 text-primary ${
                        errors.contactPreviousEmployer ? "border-red-500" : ""
                      }`}
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
                {errors.contactPreviousEmployer && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.contactPreviousEmployer}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Certification and Authorization Statement
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  name="certificationAgreement"
                  checked={formData.certificationAgreement}
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      certificationAgreement: e.target.checked,
                    }));
                    setErrors((prev) => ({
                      ...prev,
                      certificationAgreement: "",
                    }));
                  }}
                  className={`mt-1 form-checkbox h-5 w-5 text-primary ${
                    errors.certificationAgreement ? "border-red-500" : ""
                  }`}
                />
                <label className="text-gray-700">
                  By signing this application, I certify that the information
                  provided is true, complete, and accurate to the best of my
                  knowledge. I understand that any false or misleading
                  information may result in the rejection of my application or
                  termination of employment if hired.
                </label>
              </div>
              {errors.certificationAgreement && (
                <p className="text-red-500 text-sm">
                  {errors.certificationAgreement}
                </p>
              )}

              {formData.certificationAgreement && (
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
                  <p className="text-gray-700 mb-4">
                    I authorize <u>Caring 4 You and Yours</u> to conduct a
                    criminal background check at their discretion and verify my
                    references. I also grant permission for former employers,
                    educational institutions, and other relevant entities to
                    release any necessary information regarding my
                    qualifications and work history.
                  </p>
                  <p className="text-gray-700">
                    I acknowledge that this application does not constitute a
                    contract of employment and that, if hired, my employment is
                    subject to company policies and procedures.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div>
                  <label className="block text-gray-700 mb-1">
                    Applicant's Name
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="applicantName"
                    value={formData.applicantName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.applicantName ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.applicantName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.applicantName}
                    </p>
                  )}
                </div>
                <div className="col-span-2">
                  <label className="block text-gray-700 mb-1">
                    Signature
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="border rounded-lg p-2 bg-white">
                    <SignaturePad
                      ref={signaturePadRef}
                      canvasProps={{
                        className:
                          "w-full h-32 border rounded cursor-crosshair",
                      }}
                    />
                    <div className="flex justify-end space-x-2 mt-2">
                      <button
                        type="button"
                        onClick={clearSignature}
                        className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
                      >
                        Clear
                      </button>
                      <button
                        type="button"
                        onClick={saveSignature}
                        className="px-3 py-1 text-sm bg-primary text-white rounded hover:bg-secondary"
                      >
                        Save Signature
                      </button>
                    </div>
                  </div>
                  {errors.applicantSignature && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.applicantSignature}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">
                    Date
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="date"
                    name="signatureDate"
                    value={formData.signatureDate}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.signatureDate ? "border-red-500" : ""
                    }`}
                  />
                  {errors.signatureDate && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.signatureDate}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-gray-700 mb-1">
                  Upload your CV (for Revision)
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.cvFile ? "border-red-500" : ""
                  }`}
                />
                <p className="text-sm text-gray-500 mt-1">
                  Accepted formats: PDF, DOC, DOCX
                </p>
                {errors.cvFile && (
                  <p className="text-red-500 text-sm mt-1">{errors.cvFile}</p>
                )}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-light pt-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showSuccess ? (
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <div className="text-green-600 text-5xl mb-4">✓</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Thank you for applying!
            </h3>
            <p className="text-gray-600">
              Your application has been successfully submitted. Our team will
              review your details and get back to you soon.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-4xl font-bold text-center mb-12">
              Application Form
            </h2>
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
              <div className="text-center mt-2 text-gray-600">
                Step {currentStep} of {totalSteps}
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {renderStep(currentStep)}
                <div className="flex justify-between mt-6">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
                      disabled={isSubmitting}
                    >
                      Previous
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={
                      currentStep === totalSteps ? handleSubmit : nextStep
                    }
                    disabled={isSubmitting}
                    className={`${
                      currentStep === totalSteps ? "bg-green-600" : "bg-primary"
                    } text-white px-6 py-2 rounded-lg hover:bg-secondary transition duration-300 ${
                      currentStep === 1 ? "ml-auto" : ""
                    } relative`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="opacity-0">Submit</span>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin"></div>
                        </div>
                      </>
                    ) : currentStep === totalSteps ? (
                      "Submit"
                    ) : (
                      "Next"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ApplicationForm;
