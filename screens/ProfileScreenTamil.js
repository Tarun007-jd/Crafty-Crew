import React, { useEffect, useState, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { levelDataTamil } from "../constants/Data";

const PRIMARY = "#246bfd";
const SOFT_GREY = "#f6f8fa";
const CARD_BG  = "#fff";
const BORDER    = "#e3e6eb";
const ICON_GREY = "#b0b7c3";
const MENU_CARD_GRADIENT = ["#f8fafc", "#eef2f6"];

const ProfileScreenTamil = ({ navigation, route }) => {
  const {
    userName      = "கற்கும் மாணவர்",
    userProgress  = levelDataTamil,
    stars         = 0,
  } = route.params || {};

  const {
    totalModules,
    completedModules,
    totalLessons,
    progressPercent,
    totalStars,
    levelProgress,
  } = useMemo(() => {
    let mod           = 0;
    let modCompleted  = 0;
    let totalStarsEarned = 0;
    let levelStats = {};

    Object.entries(userProgress).forEach(([level, modules]) => {
      if (Array.isArray(modules)) {
        mod += modules.length;
        const completed = modules.filter(m => m.completed).length;
        modCompleted += completed;
        totalStarsEarned += completed * 3; 
        
        levelStats[level] = {
          total: modules.length,
          completed: completed,
          percentage: modules.length > 0 ? Math.round((completed / modules.length) * 100) : 0
        };
      }
    });

    const lessonsPerModule = 5;
    const estimatedLessons = modCompleted * lessonsPerModule;

    const percent = mod === 0 ? 0 : Math.round((modCompleted / mod) * 100);
    
    return {
      totalModules      : mod,
      completedModules  : modCompleted,
      totalLessons      : estimatedLessons,
      progressPercent   : percent,
      totalStars        : totalStarsEarned,
      levelProgress     : levelStats,
    };
  }, [userProgress]);

  const getLevelNameTamil = (level) => {
    switch(level) {
      case 'basic': return 'அடிப்படைகள்';
      case 'intermediate': return 'வெற்றி பாதை';
      case 'advanced': return 'தேர்ச்சி';
      default: return level.charAt(0).toUpperCase() + level.slice(1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View style={styles.avatarWrap}>
              <View style={styles.avatarShadow}>
                <View style={styles.avatar}>
                  <Ionicons name="person" size={56} color={PRIMARY} />
                </View>
              </View>
            </View>

            <Text style={styles.headerTitle}>
              வணக்கம், {userName}
            </Text>
            <Text style={styles.headerSubtitle}>
              உங்கள் கற்றல் பயணம் அருமையாக உள்ளது!
            </Text>
          </View>

          <View style={styles.statsCard}>
            <View style={styles.statBlock}>
              <Text style={styles.statValue}>{totalStars}</Text>
              <Text style={styles.statLabel}>⭐ நட்சத்திரங்கள்</Text>
            </View>

            <View style={styles.statDivider} />

            <View style={styles.statBlock}>
              <Text style={styles.statValue}>
                {completedModules}/{totalModules}
              </Text>
              <Text style={styles.statLabel}>பாடங்கள்</Text>
            </View>

            <View style={styles.statDivider} />

            <View style={styles.statBlock}>
              <Text style={styles.statValue}>{progressPercent}%</Text>
              <Text style={styles.statLabel}>முன்னேற்றம்</Text>
            </View>
          </View>

          <View style={styles.levelProgressSection}>
            <Text style={styles.sectionTitle}>நிலை முன்னேற்றம்</Text>
            {Object.entries(levelProgress).map(([level, stats]) => (
              <View key={level} style={styles.levelCard}>
                <View style={styles.levelHeader}>
                  <Text style={styles.levelName}>
                    {getLevelNameTamil(level)}
                  </Text>
                  <Text style={styles.levelPercentage}>{stats.percentage}%</Text>
                </View>
                <View style={styles.progressBarContainer}>
                  <View style={styles.progressBarBg}>
                    <View 
                      style={[styles.progressBarFill, { width: `${stats.percentage}%` }]} 
                    />
                  </View>
                  <Text style={styles.levelStats}>
                    {stats.completed}/{stats.total} முடிந்தது
                  </Text>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.menuList}>
            {[
              { 
                title: "கற்றல் முன்னேற்றம்", 
                icon: "stats-chart-outline", 
                nav: "RewardsScreen",
                params: { userProgress, stars: totalStars }
              },
              { 
                title: "பயிற்சி அமர்வுகள்", 
                icon: "book-outline", 
                nav: "PracticeScreenTamil",
                params: { userProgress }
              },
              { 
                title: "முகப்புக்கு திரும்பு", 
                icon: "home-outline", 
                nav: "HomeScreenTamil",
                params: { userProgress }
              },
            ].map(item => (
              <TouchableOpacity
                key={item.title}
                style={styles.menuCard}
                activeOpacity={0.75}
                onPress={() => navigation.navigate(item.nav, item.params || {})}
              >
                <LinearGradient
                  colors={MENU_CARD_GRADIENT}
                  style={styles.menuCardBg}
                >
                  <Ionicons name={item.icon} size={22} color={ICON_GREY} />
                  <Text style={styles.menuText}>{item.title}</Text>
                  <MaterialIcons name="keyboard-arrow-right" size={26} color={ICON_GREY} />
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.logoutWrap}>
            <TouchableOpacity
              style={styles.logout}
              onPress={() => navigation.reset({
                index: 0,
                routes: [{ name: 'LoginScreen' }],
              })}
              activeOpacity={0.8}
            >
              <Ionicons name="log-out-outline" size={22} color={PRIMARY} />
              <Text style={styles.logoutText}>உள்நுழைவுக்கு திரும்பு</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
     backgroundColor: SOFT_GREY 
    },
  background: {
     flex: 1,
      backgroundColor: SOFT_GREY
     },
  scrollContent: {
     paddingTop: 36,
      paddingBottom: 30 },

  header: { alignItems: "center", marginBottom: 24 },
  avatarWrap: { marginBottom: 18 },
  avatarShadow: {
    shadowColor: "#dbeafe",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.13,
    shadowRadius: 6,
    elevation: 8,
    borderRadius: 48,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#edf2fb",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: BORDER,
  },
  headerTitle: {
    fontSize: 23,
    fontWeight: "700",
    color: "#1c2434",
    marginBottom: 2,
    textAlign: "center",
    letterSpacing: 0.3,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#495667",
    fontWeight: "400",
    textAlign: "center",
  },

  statsCard: {
    marginHorizontal: 26,
    marginBottom: 30,
    backgroundColor: CARD_BG,
    borderRadius: 14,
    flexDirection: "row",
    padding: 18,
    shadowColor: "#e2e8f0",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: BORDER,
  },
  statBlock: { flex: 1, alignItems: "center" },
  statValue: { fontSize: 20, fontWeight: "700", color: PRIMARY, marginBottom: 3 },
  statLabel: { fontSize: 13, color: "#5d6e7d", fontWeight: "500" },
  statDivider: {
    width: 1.2,
    height: 32,
    backgroundColor: BORDER,
    marginHorizontal: 6,
    borderRadius: 1,
    alignSelf: "center",
  },

  levelProgressSection: {
    marginHorizontal: 26,
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1c2434",
    marginBottom: 16,
  },
  levelCard: {
    backgroundColor: CARD_BG,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: BORDER,
    shadowColor: "#e2e8f0",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  levelHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  levelName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1c2434",
  },
  levelPercentage: {
    fontSize: 14,
    fontWeight: "700",
    color: PRIMARY,
  },
  progressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  progressBarBg: {
    flex: 1,
    height: 8,
    backgroundColor: "#e5e7eb",
    borderRadius: 4,
    marginRight: 12,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: PRIMARY,
    borderRadius: 4,
  },
  levelStats: {
    fontSize: 12,
    color: "#6b7280",
    fontWeight: "500",
    minWidth: 70,
  },

  menuList: { marginHorizontal: 26, marginBottom: 28 },
  menuCard: { marginBottom: 16, borderRadius: 13, shadowColor: "#e2e8f0", elevation: 1 },
  menuCardBg: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 19,
    borderRadius: 13,
    backgroundColor: "#f9fbfd",
    borderWidth: 1,
    borderColor: BORDER,
  },
  menuText: { flex: 1, marginLeft: 14, fontSize: 15, color: "#333", fontWeight: "500" },

  logoutWrap: { marginHorizontal: 26, marginTop: 10, borderRadius: 12, overflow: "hidden" },
  logout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e4eaff",
    borderRadius: 12,
    paddingVertical: 13,
    paddingHorizontal: 15,
  },
  logoutText: {
    color: PRIMARY,
    fontWeight: "700",
    fontSize: 16,
    letterSpacing: 0.4,
    marginLeft: 10,
  },
});

export default ProfileScreenTamil;
