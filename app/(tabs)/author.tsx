import React from 'react';
import {
  Linking,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function About() {
  const openGitHub = () => {
    Linking.openURL('https://github.com/sputurz/');
  };

  const openMyGitPages = () => {
    Linking.openURL('https://sputurz.github.io/');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.title}>Hello There</Text>
        <Text style={styles.subtitle}>About Me</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.emptyText}>
          I am Raman Mikulich.{'\n'}I am a frontend developer based in Minsk.
        </Text>
        <Text style={styles.hintText}>
          A motivated developer focused on React and modern JavaScript. I have
          experience building SPA applications for pet projects. I&apos;m eager
          to participate in commercial projects where I can apply and develop my
          skills, work in a team, and make a difference.
        </Text>

        <View style={styles.linksContainer}>
          <TouchableOpacity style={styles.linkButton} onPress={openGitHub}>
            <Text style={styles.linkText}>My GitHub Link</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkButton} onPress={openMyGitPages}>
            <Text style={styles.linkText}>My Git Page Link</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingTop: 50,
  },
  header: {
    backgroundColor: '#6C63FF',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6C63FF',
    marginBottom: 16,
    textAlign: 'center',
  },
  hintText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginBottom: 40,
  },
  linksContainer: {
    marginTop: 40,
    width: '100%',
    alignItems: 'center',
  },
  linkButton: {
    backgroundColor: 'white',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 12,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  linkText: {
    fontSize: 16,
    color: '#6C63FF',
    fontWeight: '600',
  },
});
