  
  const obj11 = {
    placeholder: 'between 18 to 90',
    label: 'WHAT IS YOUR AGE?',
    type: 'number',
    name: 'age',
    validation: {
      required: true,
      min: 18,
      max: 90,
    }
  }
  const obj12 = {
    placeholder: 'between 120 to 210',
    label: 'WHAT IS YOUR HEIGHT (IN CM)?',
    type: 'number',
    name: 'height',
    validation: {
      required: true,
      min: 120,
      max: 210,
    }
  }
  const obj13 = {
    placeholder: 'between 30 to 240',
    label: 'WHAT IS YOUR WEIGHT (IN KG)?',
    type: 'number',
    name: 'height',
    validation: {
      required: true,
      min: 30,
      max: 240,
    }
  }

  const obj001 = {
    placeholder: 'email',
    label: 'Enter email here',
    type: 'email',
    name: 'email',
    validation: {
      required: true,
    }
  }
  const obj002 = {
    placeholder: 'name',
    label: 'Enter name here',
    type: 'text',
    name: 'name',
    validation: {
      required: true,
      minLength: 3,
      maxLength: 25,
    }
  }

  const obj14 = {
    placeholder: '',
    label: 'WHAT WAS YOUR BIOLOGICAL GENDER AT BIRTH?',
    type: 'select',
    name: 'gender',
    options: ['male', 'female', 'others'],
    validation: {
      required: true,
    },
    children: {
      placeholder: '',
      label: 'ARE YOU PREGNANT?',
      type: 'select',
      name: 'pregnant',
      options: ['Yes', 'No'],
      validation: {
        required: true,
      },
      dependOn: 'female'
    }
  }


  const obj21 = {
    placeholder: 'dietBefore',
    label: 'Have you been on a diet before?',
    type: 'multiple',
    name: 'dietBefore',
    options: [
      {value: 'NO', isOnlyOption: true, text: 'Choose this if you have never followed a diet plan.'},
      {value: 'KETOGENIC DIET', isOnlyOption: false, text: 'Keto diet is a high-fat, adequate-protein, low-carbohydrate diet.'},
      {value: 'INTERMEDIATE FASTING', isOnlyOption: false, text: 'Meal schedules that cycle between voluntary fasting and non-fasting over a given period.'},
      {value: 'ANY RESTRICTIVE DIET', isOnlyOption: false, text: 'Choose this if you have taken any other restrictive diet plan.'},
      {value: 'CONSULTED A NUTRITION PROFESSIONAL', isOnlyOption: false, text: 'Choose this if you have taken help from professional nutritionist or doctor for your diet.'},
      {value: 'OTHERS', isOnlyOption: true, text: 'Choose this if you have taken any other form of diet plans.'},
      ],
    validation: {
      required: true,
    }
  }

  const obj34 = {
    placeholder: '',
    label: 'WHAT IS YOUR STRESS LEVEL? (SCALE 1 - 10)',
    type: 'range',
    name: 'stressLevel',
    min: 1,
    max: 10,
    minText: 'chill',
    maxText: 'neurotic',
    defaultValue: 4,
    validation: {
      required: true,
    }
  }

  const obj31 = {
    placeholder: '',
    label: 'DO YOU WORK SITTING DOWN?',
    type: 'select',
    name: 'isWorkSittingDown',
    options:  ['Yes', 'No'],
    validation: {
      required: true,
    }
  }
  const obj32 = {
    placeholder: '',
    label: 'WHEN DOES YOUR WORK START?',
    type: 'select',
    name: 'workStart',
    options: ['9:00AM', '10:00AM', '11:00AM'],
    validation: {
      required: true,
    }
  }
  const obj33 = {
    placeholder: '',
    label: 'WHEN DOES YOUR WORK END?',
    type: 'select',
    name: 'workEnd',
    options: ['6:00PM', '7:00PM', '8:00PM'],
    validation: {
      required: true,
    }
  }
  const obj35 = {
    placeholder: '',
    label: 'WHEN DO YOU USUALLY GO TO BED?',
    type: 'select',
    name: 'bedTime',
    options: ['10:00PM', '11:00PM', '12:00PM'],
    validation: {
      required: true,
    }
  }

  const obj36 = {
    placeholder: '',
    label: 'HOW MUCH YOU SLEEP ON AVERAGE?',
    type: 'range',
    name: 'sleepTime',
    min: 3,
    max: 12,
    minText: '3 hours',
    maxText: '12 hours',
    defaultValue: 6,
    validation: {
      required: true,
    }
  }
  const obj37 = {
    placeholder: '',
    label: 'WHAT IS YOUR SLEEP QUALITY (SCALE 1 - 5)?',
    type: 'range',
    name: 'sleepQuality',
    min: 1,
    max: 5,
    minText: 'uncomfortable',
    maxText: 'comfortable',
    defaultValue: 3,
    validation: {
      required: true,
    }
  }

  const quesArray1 = [obj001, obj002, obj11, obj12, obj13, obj14]
  const quesArray2 = [obj21]
  const quesArray3 = [obj31, obj32, obj33, obj34, obj35, obj36, obj37 ]

  const allPages = [quesArray1, quesArray2, quesArray3]

  export default allPages