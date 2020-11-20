import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default function Lista(props) {
  const [feed, setFeed] = React.useState(props.data);

  const mostraLikes = (likers) => {
    if (feed.likers <= 0) return;

    return (
      <Text style={styles.likes}>
        {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
  };

  const like = () => {
    if (feed.likeada) {
      setFeed({
        ...feed,
        likeada: false,
        likers: feed.likers - 1,
      });
    } else {
      setFeed({
        ...feed,
        likeada: true,
        likers: feed.likers + 1,
      });
    }
  };

  const carregaIcone = (likeada) =>
    likeada ? require('../img/likeada.png') : require('../img/like.png');

  return (
    <View style={styles.areaFeed}>
      <View style={styles.viewPerfil}>
        <Image
          resizeMode="cover"
          source={{uri: feed.imgperfil}}
          style={styles.fotoPerfil}
        />

        <Text style={styles.nomeUsuario}>{feed.nome}</Text>
      </View>

      <Image style={styles.fotoPublicacao} source={{uri: feed.imgPublicacao}} />

      <View style={styles.areaBtn}>
        <TouchableOpacity onPress={like}>
          <Image source={carregaIcone(feed.likeada)} style={styles.iconelike} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSend}>
          <Image source={require('../img/send.png')} style={styles.iconelike} />
        </TouchableOpacity>
      </View>

      {mostraLikes(feed.likers)}

      <View style={styles.viewRodape}>
        <Text style={styles.nomeRodape}>{feed.nome}</Text>

        <Text style={styles.descRodape}>{feed.descricao}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  areaFeed: {},
  nomeUsuario: {
    fontSize: 22,
    textAlign: 'left',
    color: '#000',
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 5,
  },
  fotoPublicacao: {
    flex: 1,
    height: 400,
    alignItems: 'center',
  },
  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 5,
  },
  iconelike: {
    width: 33,
    height: 33,
  },
  btnSend: {
    paddingLeft: 5,
  },
  viewRodape: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descRodape: {
    paddingLeft: 5,
    fontSize: 15,
    color: '#000',
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 5,
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
