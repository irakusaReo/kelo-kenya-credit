
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Gift, Star } from 'lucide-react';

interface SmartReminderModalProps {
  isOpen: boolean;
  onClose: () => void;
  reminderData: {
    amount: number;
    daysUntil: number;
    language: 'en' | 'sw';
    streak: number;
  };
}

const SmartReminderModal = ({ isOpen, onClose, reminderData }: SmartReminderModalProps) => {
  const { amount, daysUntil, language, streak } = reminderData;

  const reminderMessages = {
    en: {
      title: "Payment Reminder",
      message: daysUntil === 0 
        ? `Your payment of KSh ${amount.toLocaleString()} is due today!`
        : `Your payment of KSh ${amount.toLocaleString()} is due in ${daysUntil} day${daysUntil > 1 ? 's' : ''}.`,
      streakText: `Current streak: ${streak} on-time payments`,
      rewardText: "Pay on time to earn bonus KELO tokens!",
      payButton: "Pay Now",
      remindButton: "Remind Me Later"
    },
    sw: {
      title: "Ukumbusho wa Malipo",
      message: daysUntil === 0
        ? `Malipo yako ya KSh ${amount.toLocaleString()} yanastahili leo!`
        : `Malipo yako ya KSh ${amount.toLocaleString()} yanastahili baada ya siku ${daysUntil}.`,
      streakText: `Mfululizo wako: malipo ${streak} kwa wakati`,
      rewardText: "Lipa kwa wakati upate bonus ya KELO!",
      payButton: "Lipa Sasa",
      remindButton: "Nikumbushe Baadaye"
    }
  };

  const messages = reminderMessages[language];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            {messages.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="py-4 space-y-4">
          <div className="text-center">
            <div className={`h-16 w-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
              daysUntil === 0 ? 'bg-red-100' : daysUntil === 1 ? 'bg-orange-100' : 'bg-blue-100'
            }`}>
              <Clock className={`h-8 w-8 ${
                daysUntil === 0 ? 'text-red-600' : daysUntil === 1 ? 'text-orange-600' : 'text-blue-600'
              }`} />
            </div>
            
            <p className="text-lg font-medium mb-2">{messages.message}</p>
            
            <div className="flex items-center justify-center gap-2 mb-3">
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="text-sm text-gray-600">{messages.streakText}</span>
            </div>
            
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Gift className="h-3 w-3 mr-1" />
              {messages.rewardText}
            </Badge>
          </div>
          
          <div className="flex gap-2">
            <Button 
              onClick={onClose}
              className="flex-1 bg-kelo-blue hover:bg-kelo-blue/90"
            >
              {messages.payButton}
            </Button>
            <Button 
              variant="outline" 
              onClick={onClose}
              className="flex-1"
            >
              {messages.remindButton}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SmartReminderModal;
