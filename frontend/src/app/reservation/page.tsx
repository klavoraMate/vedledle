'use client'
import Layout from "@/app/components/layout/Layout";
import FormContainer from "@/app/components/form/FormContainer";
import GroomingForm from "@/app/components/form/GroomingForm";
import {useState} from "react";
import {Dog, Grooming} from "@/app/util/types";
import Calendar from "@/app/components/Calendar";

export default function Reservation() {
    const [dog, setDog] = useState<Dog>();
    const [grooming, setGrooming] = useState<Grooming>();
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