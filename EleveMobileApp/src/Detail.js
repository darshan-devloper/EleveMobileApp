import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    FlatList,
    ScrollView,
    Image
} from 'react-native';
import VideoPlayer from 'react-native-video-player';

let Detail;
let Media_ARRAY;
let navigatior;

export default class extends React.Component {


    onPlayPres = (id) => {
        this.setState({ currentId: id });
    }

    renderItem = ({ item }) => {
        try {
            item = JSON.parse(item);
        } catch (e) {
            console.log(e);
        }
        return (
            <View style={{ flex: 1, marginHorizontal: 5 }}>
                {item.type === 'GraphImage' && <Image style={{ width: '100%', height: 400, borderRadius: 10 }} source={{ uri: item.url }}></Image>}
                {item.type === 'GraphVideo' &&
                    <View style={{ width: '100%', height: 400, marginVertical: 10 }}>
                        <VideoPlayer
                            ref={ref => { this.video = ref }}
                            key={item.id}
                            video={{ uri: item.url }}
                            disableFullscreen={false}
                            resizeMode={'cover'}
                            paused={item.id == this.state.currentId ? false : true}
                            onPlayPress={() => this.onPlayPres(item.id)}
                            style={{ height: '100%', borderRadius: 10 }}
                            thumbnail={{ url: item.thumbnail }}
                        />
                    </View>}
            </View>
        );
    };

    constructor(props) {
        super(props);
        Detail = props.route.params.itemDetail;
        this.state = {
            currentId: ''
        }
        navigatior = props.navigation;
        Media_ARRAY = JSON.parse((JSON.stringify(Detail.top_posts)).replace(/ /g, ''));
    }

    videoError = (error) => {
        console.log(error);
    }
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={{ height: 60, marginStart: 10, flexDirection: 'row' }}>
                        <Image onStartShouldSetResponder={() => navigatior.goBack()} style={{ tintColor: "#000000",width:40, resizeMode: 'contain',alignSelf:'center' }} source={require('./images/back.png')}></Image>
                        <Text style={{ fontSize: 20,alignSelf:'center',marginStart:20 }}>{Detail.username}</Text>
                    </View>
                    <View style={{ flexDirection: "row", margin: 10, marginTop: 10 }}>
                        <Image style={styles.profile_Image} source={{ uri: Detail.profile_url }} />
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", flex: 1 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.value_Style}>{Detail.total_post_count}</Text>
                                <Text style={styles.lable_Style}>Posts</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.value_Style}>{Detail.total_followers_count}</Text>
                                <Text style={styles.lable_Style}>Followers</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.value_Style}>{Detail.total_following_count}</Text>
                                <Text style={styles.lable_Style}>Following</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={[styles.value_Style, { marginStart: 10, marginBottom: 10 }]}>{Detail.fullname}</Text>

                    <View style={{ width: '100%', flex: 1 }}>
                        <FlatList
                            data={Media_ARRAY}
                            renderItem={this.renderItem}
                            keyExtractor={(item) => item.url}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    profile_Image: {
        height: 70,
        width: 70,
        borderWidth: 1,
        borderRadius: 35,
        overflow: "hidden",
        borderColor: "#f5f5f5",

    },

    value_Style: {
        fontSize: 20,
        color: "#000000",
        fontWeight: 'bold'
    },


    lable_Style: {
        fontSize: 15,
        color: "#000000",
    }
})