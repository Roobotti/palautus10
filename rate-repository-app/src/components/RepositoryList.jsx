import { FlatList, View, StyleSheet } from 'react-native';
import Item from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={({item}) => <Item props={item}/>}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={item => item.id}
      // other props
    />
  );
};

export default RepositoryList;