import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function BookingItem({ item, onComplete, onDelete }) {
  const isDone = item.status === 'Selesai';

  return (
    <View style={[styles.card, isDone && styles.cardDone]}>
      <View style={styles.rowBetween}>
        <Text style={styles.plate}>{item.plateNumber}</Text>
        <View style={[styles.statusBadge, isDone ? styles.badgeDone : styles.badgeWait]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>

      <Text style={styles.motor}>{item.motorType} — {item.ownerName}</Text>
      <Text style={styles.service}>Paket: {item.serviceName}</Text>
      <Text style={styles.complaint}>Keluhan: {item.complaint}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>Rp {item.price.toLocaleString('id-ID')}</Text>
        <View style={styles.actions}>
          {!isDone && (
            <TouchableOpacity style={styles.btnDone} onPress={() => onComplete(item.id)}>
              <Text style={styles.btnText}>Selesai</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.btnDelete} onPress={() => onDelete(item.id)}>
            <Text style={styles.btnText}>Hapus</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#F59E0B',
  },
  cardDone: {
    borderLeftColor: '#10B981',
    opacity: 0.85,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  plate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeWait: {
    backgroundColor: '#FEF3C7',
  },
  badgeDone: {
    backgroundColor: '#D1FAE5',
  },
  statusText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  motor: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    marginTop: 4,
  },
  service: {
    fontSize: 13,
    color: '#EF4444',
    fontWeight: '500',
    marginTop: 2,
  },
  complaint: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  btnDone: {
    backgroundColor: '#10B981',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  btnDelete: {
    backgroundColor: '#EF4444',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});