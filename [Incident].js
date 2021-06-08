/*import { put, get, del } from "../../utils/api";

import { toast } from "react-toastify";

export default function UniqueData() {
  const router = useRouter();
  const { handleChange, handleSubmit, setValues, values, errors } = useForm(
    submit,
    validate
  );

  const [open, setOpen] = useState(false);
  const [remove, setDelete] = useState("");
  const [apiError, setApiError] = useState("");

  function submit() {
    setOpen(true);
    put(`/api/member/${values._id}`, values).then(
      (res) => {
        setOpen(false);
        if (!res.data.success) {
          setApiError(res.error);
        } else {
          router.push("/membres");
        }
      },
      (_) => {
        router.push("/membres");
      }
    );
  }

  function handleDelete() {
    setOpen(true);
    del(`/api/member/${values._id}`).then(
      (res) => {
        setOpen(false);
        if (!res.data.success) {
          setApiError(res.error);
        } else {
          router.push("/membres");
        }
      },
      (_) => {
        setApiError("An error occured");
      }
    );
  }
  useEffect(() => {
    if (router.query.mid) {
      get(`/api/member/${router.query.mid}`)
        .then(
          (res) => {
            if (res.data.success) {
              if (res.data.data) setValues(res.data.data);
            } else {
              router.push("/membres");
            }
          },
          (_) => {
            router.push("/membres");
          }
        )
        .catch((_) => {
          router.push("/membres");
        });
    }
  }, [router.query.mid]);

  useEffect(() => {
    if (apiError) {
      toast.error(apiError, {
        position: "bottom-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [apiError]);

  return <div></div>;
}
*/
