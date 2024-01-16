'use client'
import Layout from "@/app/components/layout/Layout";
import FormContainer from "@/app/components/container/FormContainer";
import GroomingForm from "@/app/components/form/GroomingForm";
import {useState} from "react";
import {Dog, Grooming} from "@/app/util/types";
import Calendar from "@/app/components/calendar/Calendar";

export default function Reservation() {
    const [dog, setDog] = useState<Dog|null>(null);
    const [grooming, setGrooming] = useState<Grooming|null>(null);
    const [isGroomingFormFilled, setIsGroomingFormFilled] = useState<boolean>(false);

    return (
        <Layout>
            {!isGroomingFormFilled ? (<FormContainer>
                <GroomingForm
                    dog={dog}
                    setDog={setDog}
                    grooming={grooming}
                    setGrooming={setGrooming}
                    setIsGroomingFormFilled={setIsGroomingFormFilled}
                />
            </FormContainer>) : (
                <Calendar
                    dog={dog}
                    grooming={grooming}
                />
            )}

        </Layout>
    )
}