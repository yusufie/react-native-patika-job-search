import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Loading from '../components/Loading';
import useFetch from '../hooks/useFetch';
import {JOB_URL} from '../constant/api';
import JobCard from '../components/JobCard';
import {useNavigation} from '@react-navigation/native';

const Jobs = () => {
  const [jobsData, setJobsData] = useState([]);
  const {data, loading, error} = useFetch(JOB_URL);

  const navigation = useNavigation();
  // Veri yüklendikten sonra sadece isimleri al
  useEffect(() => {
    if (data && data.results) {
      setJobsData(data.results);
    }
  }, [data]);

  const renderJobs = ({item}) => {
    return (
      <JobCard
        item={item}
        onPress={() => navigation.navigate('Detail', {jobDetail: item})}
      />
    );
  };

  // Yükleme işlemi devam ediyorsa loading bileşenini göster
  if (loading) {
    return <Loading />;
  }

  return (
    <View>
      <FlatList
        data={jobsData}
        renderItem={renderJobs}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Jobs;
const styles = StyleSheet.create({});
