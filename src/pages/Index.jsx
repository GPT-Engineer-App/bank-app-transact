import React, { useState } from "react";
import { Box, Heading, Text, Input, Button, Select, Stack, useToast } from "@chakra-ui/react";
import { FaEnvelope, FaGlobe, FaMoneyBillAlt } from "react-icons/fa";

const Index = () => {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [transactionType, setTransactionType] = useState("local");
  const [email, setEmail] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform transaction logic here
    toast({
      title: "Transaction Successful",
      description: `${transactionType} transaction of $${amount} sent to ${recipient}.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Send email notification
    // Reset form fields
    setAmount("");
    setRecipient("");
    setEmail("");
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8} p={4} borderWidth={1} borderRadius="lg">
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        Bank of America
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <Select placeholder="Select transaction type" value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
            <option value="local">Local Transaction</option>
            <option value="international">International Transaction</option>
          </Select>
          <Input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
          <Input placeholder="Recipient" value={recipient} onChange={(e) => setRecipient(e.target.value)} required />
          <Input type="email" placeholder="Email for notifications" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Button type="submit" colorScheme="blue" leftIcon={<FaMoneyBillAlt />}>
            Send Money
          </Button>
        </Stack>
      </form>
      <Box mt={6} textAlign="center">
        <Text>
          <FaGlobe /> Send money locally or internationally
        </Text>
        <Text>
          <FaEnvelope /> Get email notifications for transactions
        </Text>
      </Box>
    </Box>
  );
};

export default Index;
