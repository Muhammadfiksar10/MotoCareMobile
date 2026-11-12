import React, { useMemo } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import HeaderBanner from '../components/HeaderBanner';
import BookingItem from '../components/BookingItem';

export default function QueueScreen({ bookings, onCompleteBooking, onDeleteBooking }) {
  // Penggunaan Hook useMemo untuk menghitung total estimasi pendapatan/biaya
  const totalRevenue = useMemo(() => {
    return bookings.reduce((sum, item) => sum + item.price, 0);
  }, [bookings]);

  return (
    <View style={styles.screen}>
      <HeaderBanner
        title="Daftar Antrean"
        subtitle={`Total Estimasi Biaya: Rp ${totalRevenue.toLocaleString('id-ID')}`}
        totalQueue={bookings.length}
      />

      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Belum ada antrean service motor hari ini.</Text>
        }
        renderItem={({ item }) => (
          <BookingItem
            item={item}
            onComplete={onCompleteBooking}
            onDelete={onDeleteBooking}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  list: {
    padding: 16,
  },
  emptyText: {
    textAlign: 'center',
    color: '#64748B',
    marginTop: 40,
    fontSize: 14,
  },
});