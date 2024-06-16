import {Linking, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addJob, setJobs} from '../redux/jobSlice';
import JobDetailCard from '../components/JobDetailCard';

const Detail = props => {
  const [jobDetail, setDetail] = useState(props.route.params.jobDetail);

  const jobs = useSelector(state => state.jobs);
  const dispatch = useDispatch();

  // const name = jobDetail.name;
  // const company = jobDetail.company.name;
  // const location = jobDetail.locations[0].name;
  // const level = jobDetail.levels[0].name;

  // --------jobDetailCard----------------------------
  const navigation = useNavigation();
  const handleFavorited = async jobDetail => {
    await dispatch(addJob(jobDetail));
    navigation.navigate('Favorited');
  };

  const handleSubmit = submit => {
    Linking.openURL(submit);
  };
  //--------------------------------------------------
  return (
    <>
      <JobDetailCard
        jobDetail={jobDetail}
        handleSubmit={handleSubmit}
        handleFavorited={handleFavorited}
      />
    </>
  );
};

export default Detail;

const styles = StyleSheet.create({});
