import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const initialValues = {
  username: '',
  password: '',
};


const styles = StyleSheet.create({
    container: {
      display: 'flex'
    },
    form: {
      padding: 20,
    },
    holder: {
      padding: 20,
      borderRadius: 10,
      marginBottom: 20,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#f9c2ff'
    }
});

const SignInForm = ({onSubmit}) => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <FormikTextInput name="username" placeholder="Username"  style={styles.holder}/>
        <FormikTextInput name="password" placeholder="Password" secureTextEntry  style={styles.holder}/>
        <Pressable onPress={onSubmit}  style={{...styles.holder, alignItems: 'center', backgroundColor: theme.colors.blue}}>
          <Text>Sign-in</Text>
        </Pressable>
      </View>
    </View>

  )
};

const SignIn = () => {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;