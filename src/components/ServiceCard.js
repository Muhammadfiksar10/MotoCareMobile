import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ServiceCard({ item, isSelected, onSelect }) {
  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.cardSelected]}
      onPress={() => onSelect(item)}
    >
      <Text style={[styles.name, isSelected && styles.textSelected]}>
        {item.name}
      </Text>
      <Text style={[styles.desc, isSelected && styles.textSelected]}>
        {item.desc}
      </Text>
      <Text style={[styles.price, isSelected && styles.textSelected]}>
        Rp {item.price.toLocaleString('id-ID')}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },
  cardSelected: {
    backgroundColor: '#FEF2F2',
    borderColor: '#EF4444',
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  desc: {
    fontSize: 12,
    color: '#64748B',
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#EF4444',
  },
  textSelected: {
    color: '#B91C1C',
  },
});