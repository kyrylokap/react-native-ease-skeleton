import { memo } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Skeleton } from 'react-native-ease-skeleton';

export const MassiveProfileCard = memo(
  ({ item, isLoading }: { item: any; isLoading: boolean }) => {
    return (
      <View style={styles.card}>
        <View style={styles.header}>
          <Skeleton
            width={52}
            height={52}
            borderRadius={26}
            show={isLoading}
            colorMode="dark"
          >
            <Image source={{ uri: item?.image }} style={styles.avatar} />
          </Skeleton>

          <View style={styles.headerText}>
            <Skeleton
              width={150}
              height={18}
              borderRadius={6}
              show={isLoading}
              colorMode="dark"
            >
              <Text style={styles.title}>
                {item?.firstName} {item?.lastName}
              </Text>
            </Skeleton>
            <View style={{ height: 6 }} />
            <Skeleton
              width={90}
              height={14}
              borderRadius={4}
              show={isLoading}
              colorMode="dark"
            >
              {!isLoading && (
                <Text style={styles.subtitle}>
                  @{item?.username || item?.email?.split('@')[0]}
                </Text>
              )}
            </Skeleton>
          </View>

          <Skeleton
            width={36}
            height={36}
            borderRadius={18}
            show={isLoading}
            colorMode="dark"
          >
            <View style={styles.iconPlaceholder} />
          </Skeleton>
        </View>

        <View style={styles.body}>
          <Skeleton
            width="100%"
            height={45}
            borderRadius={8}
            show={isLoading}
            colorMode="dark"
          >
            {!isLoading && (
              <Text style={styles.bodyText}>
                <Text style={{ color: '#FFF', fontWeight: 'bold' }}>
                  {item?.company?.title}
                </Text>{' '}
                at {item?.company?.name}.{'\n'}
                Based in {item?.address?.city}, {item?.address?.state}.
              </Text>
            )}
          </Skeleton>
        </View>

        <View style={styles.tagsContainer}>
          {[80, 95, 60].map((w, idx) => (
            <Skeleton
              key={idx}
              width={w}
              height={26}
              borderRadius={13}
              show={isLoading}
              colorMode="dark"
            >
              {!isLoading && (
                <View style={styles.tag}>
                  <Text style={styles.tagText}>
                    #{item?.company?.department || 'tech'}
                  </Text>
                </View>
              )}
            </Skeleton>
          ))}
        </View>

        <View style={styles.gallery}>
          <Skeleton
            width="48%"
            height={140}
            borderRadius={16}
            show={isLoading}
            colorMode="dark"
          >
            <View style={styles.galleryPlaceholder} />
          </Skeleton>
          <View style={{ width: '4%' }} />
          <Skeleton
            width="48%"
            height={140}
            borderRadius={16}
            show={isLoading}
            colorMode="dark"
          >
            <View style={styles.galleryPlaceholder} />
          </Skeleton>
        </View>

        <View style={styles.metricsContainer}>
          <Skeleton
            width={80}
            height={16}
            borderRadius={4}
            show={isLoading}
            colorMode="dark"
          >
            {!isLoading && (
              <Text style={styles.metricText}>
                <Text style={styles.metricBold}>{item?.weight || 142}</Text>{' '}
                Following
              </Text>
            )}
          </Skeleton>
          <View style={{ width: 16 }} />
          <Skeleton
            width={90}
            height={16}
            borderRadius={4}
            show={isLoading}
            colorMode="dark"
          >
            {!isLoading && (
              <Text style={styles.metricText}>
                <Text style={styles.metricBold}>{item?.height || 63}K</Text>{' '}
                Followers
              </Text>
            )}
          </Skeleton>
        </View>

        <View style={styles.footer}>
          <Skeleton
            width={110}
            height={38}
            borderRadius={19}
            show={isLoading}
            colorMode="dark"
          >
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>Follow</Text>
            </TouchableOpacity>
          </Skeleton>
          <View style={{ width: 12 }} />
          <Skeleton
            width={110}
            height={38}
            borderRadius={19}
            show={isLoading}
            colorMode="dark"
          >
            <TouchableOpacity style={styles.actionButtonSecondary}>
              <Text style={styles.actionTextSecondary}>Message</Text>
            </TouchableOpacity>
          </Skeleton>
        </View>
      </View>
    );
  },
  (prev, next) =>
    prev.item.id === next.item.id && prev.isLoading === next.isLoading
);

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#0A0A0A',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#1C1C1E',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
    marginLeft: 14,
  },
  title: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: -0.4,
  },
  subtitle: {
    color: '#666',
    fontSize: 14,
    fontWeight: '500',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 26,
    backgroundColor: '#1A1A1A',
  },
  iconPlaceholder: {
    width: '100%',
    height: '100%',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dots: {
    color: '#666',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1,
  },
  body: {
    marginTop: 18,
  },
  bodyText: {
    color: '#AAA',
    fontSize: 15,
    lineHeight: 22,
    letterSpacing: -0.2,
  },
  metricsContainer: {
    flexDirection: 'row',
    marginTop: 14,
    alignItems: 'center',
  },
  metricText: {
    color: '#666',
    fontSize: 14,
  },
  metricBold: {
    color: '#FFF',
    fontWeight: '700',
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 15,
  },
  actionButtonSecondary: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionTextSecondary: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 15,
  },
  tagsContainer: {
    flexDirection: 'row',
    marginTop: 18,
    gap: 8,
  },
  tag: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1C1C1E',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  tagText: {
    color: '#AAA',
    fontSize: 12,
    fontWeight: '600',
  },
  gallery: {
    flexDirection: 'row',
    marginTop: 16,
  },
  galleryPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1C1C1E',
    borderRadius: 16,
  },
});
